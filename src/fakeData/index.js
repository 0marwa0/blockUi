import { Descriptions } from "antd";
import pic1 from "../public/images/a1.webp";
import pic2 from "../public/images/a2.jpg";
import pic3 from "../public/images/a3.jpg";
import pic4 from "../public/images/a4.jpg";
import pic5 from "../public/images/a5.jpg";
import pic6 from "../public/images/a6.jpg";
import u1 from "../public/images/1.png";
import u2 from "../public/images/2.png";
import u3 from "../public/images/3.png";
import u4 from "../public/images/4.png";
import u5 from "../public/images/5.png";
import u6 from "../public/images/6.png";
export const Notifications = [
  { name: "Ammar", action: "requested some stock in the", time: "2 min" },
];
export const design = [
  { name: "Normal", description: "Communication", id: 1 },
  { name: "Special ", description: "Distribution", id: 2 },
  { name: "Generall ", description: "Environment", id: 3 },
  { name: "Normal", description: "Finance", id: 4 },
  { name: "special Offer`", description: "Tourism", id: 5 },
];
export const lunch = [
  { price: "1550$", description: "Prix fixe Menu", id: 1 },
  { price: "550$", description: "Beverage Menu", id: 2 },
  { price: "18800$", description: "Dessert Menu ", id: 3 },
  { price: "5600$", description: "Cycle Menu", id: 4 },
  { price: "8800$", description: "Du Jour Menu", id: 5 },
];
export const coffes = [
  { price: "500$", description: "Waiter Service ", id: 1 },
  { price: "800$", description: "Chinese banquet", id: 2 },
  { price: "l600$", description: "Buffet Service ", id: 3 },
  { price: "500$", description: "Self Service ", id: 4 },
  { price: "2200$", description: "Semi-Self service", id: 5 },
];
export const StatisticData = [
  {
    name: "Total Reservations",
    time: "3,254",
    doc: "245k New Products",
  },
  {
    name: "Total Events",
    time: "63",
    doc: "12,5k New Products",
  },
  {
    name: "Total Booked Hours",
    time: "3,254",
    doc: "245k New Products",
  },
  {
    name: "Total Cost",
    time: "63",
    doc: "12,5k New Products",
  },
  {
    name: "Total Income",
    time: "63",
    doc: "12,5k New Products",
  },
];
export const ReservationsData = [
  {
    id: 444,
    data: "2021-03-22",
    organizer: "Marwa jawad",
    space: "B",
    name: "Online Discuss",
    time: "a week ago",
  },
  {
    id: 48844,
    data: "2021-03-22",
    organizer: "Noor Ali",
    space: "C",
    name: "Space Company",
    time: "a week ago",
  },
  {
    id: 4644,
    data: "2021-03-22",
    organizer: "Ail Ahmed",
    space: "A",
    name: "Generall Discuss",
    time: "a week ago",
  },
  {
    id: 4744,
    data: "2021-03-22",
    organizer: "Ail Ahmed",
    space: "Hall",
    name: "Workshop",
    time: "a week ago",
  },
  {
    id: 444,
    data: "2021-03-22",
    organizer: "Marwa jawad",
    space: "B",
    name: "Meeting",
    time: "a week ago",
  },
  {
    id: 48844,
    data: "2021-03-22",
    organizer: "Noor Ali",
    space: "C",
    name: "Generall Discuss",
    time: "an Hour ago",
  },
  {
    id: 48844,
    data: "2021-03-22",
    organizer: "Noor Ali",
    space: "C",
    name: "Workshop",
    time: "an Hour ago",
  },
];

export const FileUpoaderData = [
  {
    name: "profile_English_version.pdf",
    Type: ["PDF"],
    Size: "12.3mb",
    UploadedDate: "23 September 2020",
    image: u2,
    UploadedDate: "23 September 2020",
  },
  {
    name: "profile_arabic_version",
    Type: ["PNG"],
    Size: "12.3mb",
    UploadedDate: "23 September 2020",
    image: u5,
    UploadedDate: "23 September 2020",
  },
  {
    name: "Generall_version",
    Type: ["JPG"],
    Size: "12.3mb",
    UploadedDate: "23 September 2020",
    image: u3,
    UploadedDate: "23 September 2020",
  },
];
export const ResourcesData = [
  {
    name: " branding resourse ",
    Descriptions: "A small description about the resources and what it ...",
    Type: ["PDF"],
    Size: "12.2mb",
    UploadedDate: "23 September 2020",
    image: u3,
  },
  {
    name: " branding stylesheet ",
    Descriptions: "A small description about the resources and what it ...",
    Type: ["PNG"],
    Size: "12.2mb",
    UploadedDate: "23 September 2020",
    image: u5,
  },
];

export const EventsData = [
  {
    Organizer: "workshop 2020x19 Round-One ",
    Date: "23 September 2020",
    SoldTickets: "50",
    Approvedby: u5,
    id: 888,
    Space: ["Event Hall"],
  },
  {
    Organizer: "Generall talk 2020x19 Round-One ",
    Date: "23 September 2020",
    SoldTickets: "50",
    Approvedby: u1,
    id: 888,
    Space: ["Event Hall"],
  },
];

export const BookingData = [
  {
    id: 888,
    Organizer: "Ali Ahmed",
    Title: "Generall Discuss ",
    Status: ["approved"],
    StartingDate: "05-10-2020",
    EndingDate: "08-10-2020",
    Space: ["A"],
    CreationDate: "Nov 22",
    BookedBy: "Ammar Al-Khatib",
    bookDates: [{ start: "2021-03-12", end: "2021-03-22" }],
  },
  {
    id: 858,
    Title: "WorkShop",
    Organizer: "Ali Ahmed",
    Status: ["approved"],
    StartingDate: "05-10-2020",
    EndingDate: "08-10-2020",
    Space: [" B"],
    CreationDate: "Nov 22",
    BookedBy: "Ammar Al-Khatib",
    bookDates: [{ start: "2021-03-12", end: "2021-03-22" }],
  },
  {
    Organizer: "Ali Ahmed",
    id: 858,
    Title: "online Meeting",
    Status: ["approved"],
    StartingDate: "05-10-2020",
    EndingDate: "08-10-2020",
    Space: [" B"],
    CreationDate: "Nov 22",
    BookedBy: "Ammar Al-Khatib",
    bookDates: [{ start: "2021-03-12", end: "2021-03-22" }],
  },
];
export const AdminsData = [
  {
    FullName: "Mhommed ",
    Username: "Mhommed_saf@web.de",
    Type: ["Book Admin"],
    Branch: "Baghdad",
    Status: ["Enabled "],
    phone: "0778965411",
    name: "Mho_96",
    gov: "Baghdad",
  },
  {
    FullName: "Ali ",
    Username: "Ali_saf@web.de",
    Type: ["Book Admin"],
    Branch: "Baghdad",
    Status: ["Enabled "],
    phone: "0778965411",
    name: "Ali",
    gov: "Baghdad",
  },
  {
    FullName: "Ahmed",
    Username: "nicole_saf@web.de",
    Type: ["Book Admin"],
    Branch: "Baghdad",
    Status: ["Enabled "],
    phone: "0778965411",
    name: "Libbe",
    gov: "Baghdad",
  },
  {
    FullName: "Noor",
    Username: "nicole_saf@web.de",
    Type: ["Book Admin"],
    Branch: "Babylon",
    Status: ["Enabled "],
    phone: "0778965411",
    name: "Libbe",
    gov: "Baghdad",
  },
];
export const ArticlesData = [
  {
    image: pic1,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u1,
  },
  {
    image: pic2,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u2,
  },
  {
    image: pic3,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u3,
  },
  {
    image: pic4,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u4,
  },
  {
    image: pic5,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u5,
  },
  {
    image: pic6,
    Title: "CS50 FAIR,FRESH CODERS IN BAGHDAD",
    CreatedDate: "23 September 2020",
    Createdby: u6,
  },
];
export const CustomersData = [
  {
    name: "Ali Ahmed",
    email: "ricole_saf@web.de",
    phone: "(449)953-7665",
    Date: "23 September 2020",
    Status: ["Enabled"],
  },
  {
    name: "Mhommed ",
    email: "ricole_saf@web.de",
    phone: "(996)999-7665",
    Date: "23 September 2020",
    Status: ["Enabled"],
  },
  {
    name: "Jone ",
    email: "ricole_saf@web.de",
    phone: "(1)999-7665",
    Date: "23 September 2020",
    Status: ["Enabled"],
  },
  {
    name: "Ahmed",
    email: "ricole_saf@web.de",
    phone: "(964)883-7665",
    Date: "23 September 2020",
    Status: ["Enabled"],
  },
];
