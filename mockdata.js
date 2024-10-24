const leads = [
    { firstName: "Alice", lastName: "Smith", email: "alice.smith@example.com", phone: "1111111111", source: "Website", status: "new" },
    { firstName: "Bob", lastName: "Johnson", email: "bob.johnson@example.com", phone: "2222222222", source: "Email", status: "contacted" },
    { firstName: "Charlie", lastName: "Brown", email: "charlie.brown@example.com", phone: "3333333333", source: "Social Media", status: "qualified" },
    { firstName: "David", lastName: "Davis", email: "david.davis@example.com", phone: "4444444444", source: "Referral", status: "converted" },
    { firstName: "Eve", lastName: "White", email: "eve.white@example.com", phone: "5555555555", source: "Website", status: "new" },
    { firstName: "Frank", lastName: "Green", email: "frank.green@example.com", phone: "6666666666", source: "Email", status: "contacted" },
    { firstName: "Grace", lastName: "Harris", email: "grace.harris@example.com", phone: "7777777777", source: "Social Media", status: "qualified" },
    { firstName: "Henry", lastName: "Lewis", email: "henry.lewis@example.com", phone: "8888888888", source: "Referral", status: "converted" },
    { firstName: "Ivy", lastName: "Martinez", email: "ivy.martinez@example.com", phone: "9999999999", source: "Website", status: "new" },
    { firstName: "Jack", lastName: "Garcia", email: "jack.garcia@example.com", phone: "1010101010", source: "Email", status: "contacted" },
    { firstName: "Karen", lastName: "Rodriguez", email: "karen.rodriguez@example.com", phone: "2020202020", source: "Social Media", status: "qualified" },
    { firstName: "Leo", lastName: "Martinez", email: "leo.martinez@example.com", phone: "3030303030", source: "Referral", status: "converted" },
    { firstName: "Mia", lastName: "Davis", email: "mia.davis@example.com", phone: "4040404040", source: "Website", status: "new" },
    { firstName: "Nora", lastName: "Clark", email: "nora.clark@example.com", phone: "5050505050", source: "Email", status: "contacted" },
    { firstName: "Oscar", lastName: "Hall", email: "oscar.hall@example.com", phone: "6060606060", source: "Social Media", status: "qualified" },
    { firstName: "Paul", lastName: "Walker", email: "paul.walker@example.com", phone: "7070707070", source: "Referral", status: "converted" },
];



const campaigns = [
    { name: "Summer Sale", description: "Summer campaign for sales.", startDate: "2024-06-01T00:00:00Z", endDate: "2024-06-15T00:00:00Z", status: "active" },
    { name: "Fall Discount", description: "Fall promotional discount for all products.", startDate: "2024-09-01T00:00:00Z", endDate: "2024-09-15T00:00:00Z", status: "inactive" },
    { name: "Black Friday Deals", description: "Exclusive deals for Black Friday.", startDate: "2024-11-20T00:00:00Z", endDate: "2024-11-30T00:00:00Z", status: "active" },
    { name: "Holiday Special", description: "Special holiday offers for the festive season.", startDate: "2024-12-01T00:00:00Z", endDate: "2024-12-25T00:00:00Z", status: "inactive" },
    { name: "Spring Clearance", description: "Clearance sale to make room for new inventory.", startDate: "2024-03-01T00:00:00Z", endDate: "2024-03-15T00:00:00Z", status: "completed" },
    { name: "New Year New You", description: "New Year promotion to encourage self-improvement.", startDate: "2024-01-01T00:00:00Z", endDate: "2024-01-15T00:00:00Z", status: "active" },
    { name: "Back to School Sale", description: "Sales event for school supplies and clothing.", startDate: "2024-08-01T00:00:00Z", endDate: "2024-08-15T00:00:00Z", status: "active" },
    { name: "Valentine's Day Special", description: "Romantic gifts and offers for Valentine's Day.", startDate: "2024-02-01T00:00:00Z", endDate: "2024-02-14T00:00:00Z", status: "inactive" },
    { name: "Easter Extravaganza", description: "Special Easter discounts and promotions.", startDate: "2024-04-01T00:00:00Z", endDate: "2024-04-15T00:00:00Z", status: "completed" },
    { name: "Anniversary Sale", description: "Celebration of our anniversary with great discounts.", startDate: "2024-07-01T00:00:00Z", endDate: "2024-07-15T00:00:00Z", status: "active" },
    { name: "Memorial Day Sales", description: "Discounts for Memorial Day.", startDate: "2024-05-01T00:00:00Z", endDate: "2024-05-15T00:00:00Z", status: "inactive" },
    { name: "Labor Day Sale", description: "Special offers for Labor Day.", startDate: "2024-09-01T00:00:00Z", endDate: "2024-09-15T00:00:00Z", status: "completed" },
    { name: "Cyber Monday Deals", description: "Online deals for Cyber Monday.", startDate: "2024-11-25T00:00:00Z", endDate: "2024-11-30T00:00:00Z", status: "active" },
    { name: "Earth Day Promotions", description: "Eco-friendly promotions for Earth Day.", startDate: "2024-04-22T00:00:00Z", endDate: "2024-04-23T00:00:00Z", status: "active" },
    { name: "Thanksgiving Sale", description: "Special offers for Thanksgiving.", startDate: "2024-11-01T00:00:00Z", endDate: "2024-11-25T00:00:00Z", status: "inactive" },
];





module.exports = { leads, campaigns };
