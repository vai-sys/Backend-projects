const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const { createObjectCsvWriter } = require('csv-writer');

async function generatePDF(metrics) {
    try {
        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage([600, 800]);

        if (!metrics || typeof metrics !== 'object') {
            throw new Error("Invalid metrics data");
        }

        page.drawText('Metrics Report', {
            x: 50,
            y: 750,
            size: 24,
            color: rgb(0, 0, 0)
        });

        let yPosition = 700;

        const drawTextWithOverflow = (page, text, x, y, size = 12, color = rgb(0, 0, 0)) => {
            const maxYPosition = 50;
            const lines = text.split('\n');
            
            lines.forEach((line) => {
                if (yPosition <= maxYPosition) {
                    page = pdfDoc.addPage([600, 800]);
                    yPosition = 750;
                }
                page.drawText(line, {
                    x: x,
                    y: yPosition,
                    size: size,
                    color: color
                });
                yPosition -= 20;
            });

            return page;
        };

        const formatValue = (value, depth = 0, maxDepth = 3) => {
            if (value === undefined || value === null) {
                return 'N/A';
            }
            if (depth > maxDepth) {
                return '[Max depth reached]';
            }
            if (typeof value === 'object') {
                return Object.entries(value)
                    .map(([k, v]) => `${k}: ${formatValue(v, depth + 1)}`)
                    .join('\n');
            }
            return value.toString();
        };

        for (const [key, value] of Object.entries(metrics)) {
            if (key === '_id' || key === '__v' || key === 'createdAt' || key === 'updatedAt') continue;

            const displayKey = key.replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());

            page = drawTextWithOverflow(page, `${displayKey}:`, 50, yPosition, 14, rgb(0, 0, 0));

            const formattedValue = formatValue(value);
            page = drawTextWithOverflow(page, formattedValue, 200, yPosition, 12, rgb(0.3, 0.3, 0.3));
        }

        page.drawText(`Generated on: ${new Date().toLocaleString()}`, {
            x: 50,
            y: 50,
            size: 10,
            color: rgb(0.5, 0.5, 0.5)
        });

        const pdfBytes = await pdfDoc.save();
        const pdfPath = path.join(__dirname, `metrics_${Date.now()}.pdf`);
        fs.writeFileSync(pdfPath, pdfBytes);
        return pdfPath;

    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

async function generateCSV(metrics) {
    try {
        if (!metrics || typeof metrics !== 'object') {
            throw new Error("Invalid metrics data");
        }

        const csvWriter = createObjectCsvWriter({
            path: path.join(__dirname, `metrics_${Date.now()}.csv`),
            header: Object.keys(metrics).map(key => ({ id: key, title: key }))
        });

        await csvWriter.writeRecords([metrics]);
        return csvWriter.path;
    } catch (error) {
        console.error('Error generating CSV:', error);
        throw error;
    }
}

module.exports = { generatePDF, generateCSV };
