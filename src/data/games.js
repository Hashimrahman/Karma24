import hackImage from "../assets/events/event-hackathon.jpg";
import caddImage from "../assets/events/workshop-cadd.jpg";
import vrImage from "../assets/events/event-vr.jpg";

const games = [
  {
    id: "1",
    title: "Game 1",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    description: ["Team of 2 or 3 members"],
    fee: "299 per team",
    prize: "1st Prize: ₹3000, 2nd Prize: ₹1500",
  },
  {
    id: "2",
    title: "Game 2",
    dateTime: "01 MARCH 2024, 10 AM - 02 MARCH 2024, 10 AM",
    image: hackImage,
    description: ["Categories: Hardware, Software", "Team of 3 or 4 members"],
    fee: "300 per team",
    prize: "1st Prize: ₹15000, 2nd Prize: ₹10000",
  },
  {
    id: "3",
    title: "Game 3",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: caddImage,
    description: ["Individual Participation"],
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "4",
    title: "Game 4",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: vrImage,
    description: ["6+ Adeventres and Games"],
    fee: 50,
  },
  {
    id: "5",
    title: "Game 5",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "6",
    title: "Game 6",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: "event-vr.jpg",
    description: [
      "For ITI, Polytechnic, and Engineering students",
      "Team of 3 or 4 members",
      "Categories: Working Model, Still Model",
    ],
    prize: "Prize: ₹10000 for each category",
    fee: 399,
  },
];

export default games;