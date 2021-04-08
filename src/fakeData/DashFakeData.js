import React from "react";

const colors = {
  color1: "var(--darkGreen)",
  color2: "var(--orange)",
  color3: "var(--blue)",
  color4: "var(--red)",
  color5: "var(--purple)",
};
export const Data = [
  {
    title: "Workshop",
    start: "2021-04-01",
    end: "2021-04-1",
    data: [
      {
        title: "Workshop",
        day: "Sunday",
        date: "1 April 2021",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Meeting",
    start: "2021-04-07",
    end: "2021-04-06",
    data: [
      {
        title: "Meeting",
        day: " Wensday",
        date: "7 April 2021 ",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Space Company",
    start: "2021-04-13",
    end: "2021-04-13",
    data: [
      {
        title: "Space Company",
        day: "Tuesday",
        date: "13 April 2021",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Free Discuss",
    start: "2021-04-05",
    end: "2021-04-14",
    data: [
      {
        title: "Free Discuss",
        day: "Saturday",
        date: "31 April 2021",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Specific Discuss",
    start: "2021-04-19",
    end: "2021-04-22",
    data: [
      {
        title: "Specific Discuss",
        day: "Friday",
        date: "30 March 2021",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Online Meeting",
    start: "2021-04-18",
    end: "2021-04-21",
    data: [
      {
        title: "Online Meeting",
        day: "Sundey - Wednsday",
        date: "18 April 2021 -18 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Generall Discuss",
    start: "2021-04-19",
    end: "2021-04-21",
    data: [
      {
        title: "Generall Discuss",
        day: "Monday - Tuesday",
        date: "18 April 2021 -20 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Meeting",
    start: "2021-04-04",
    end: "2021-04-08",
    data: [
      {
        title: "Meeting",
        day: "Sundey - Wednsday",
        date: "4 April 2021 - 8 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
  {
    title: "Free Topic",
    start: "2021-04-04",
    end: "2021-04-06",
    data: [
      {
        title: "Free Topic",
        day: "Sundey - Wednsday",
        date: "4 April 2021 - 6 November 2020",
        time: "8:00 Am - 9:00AM",
      },
    ],
    color: `${colors[`color${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`]}`,
  },
];
