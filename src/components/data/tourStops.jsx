import crosswordDAL from "./crosswordDAL"
import crosswordLA from "./crosswordLA"

const tourStops = [
    {
      "date1": 2,
      "date2": 12,
      "venue": "Palace of the Fine Arts",
      "city": "San Francisco",
      "state": "California",
      "game": "coloring",
      "data": "WOTE_coloring_1.png"
    },
    {
      "date1": 2,
      "date2": 13,
      "venue": "Palace Theatre",
      "city": "Los Angeles",
      "state": "California",
      "game": "crossword",
      "data": crosswordLA
    },
    {
      "date1": 2,
      "date2": 14,
      "venue": "The Magnolia",
      "city": "El Cajon",
      "state": "California",
      "game": "coloring",
      "data": "WOTE_coloring_2.png"
    },
    {
      "date1": 2,
      "date2": 15,
      "venue": "Fox Performing Arts Center",
      "city": "Riverside",
      "state": "California",
      "game": "puzzle",
      "data": "WOTE_slider_1.jpg"
    },
    {
      "date1": 2,
      "date2": 16,
      "venue": "The Van Buren",
      "city": "Phoenix",
      "state": "Arizona",
      "game": "waldo",
      "data": "Waldo_1.jpg",
      "data2": ["taco","butterfly","dog", "ice cream", "skateboard"]
    },
    {
      "date1": 2,
      "date2": 18,
      "venue": "Majestic Theater",
      "city": "Dallas",
      "state": "Texas",
      "game": "puzzle",
      "data": "WOTE_slider_2.jpg"
    },
    {
      "date1": 2,
      "date2": 19,
      "venue": "The Aztec Theater",
      "city": "San Antonio",
      "state": "Texas",
      "game": "coloring",
      "data": "WOTE_coloring_6.png"
    },
    {
      "date1": 2,
      "date2": 21,
      "venue": "Mars Music Hall",
      "city": "Huntsville",
      "state": "Alabama",
      "game": "coloring",
      "data": "WOTE_coloring_7.png"
    },
    {
      "date1": 2,
      "date2": 22,
      "venue": "Seven Seas Concert Series",
      "city": "Orlando",
      "state": "Florida",
      "game": "waldo",
      "data": "Waldo_2.jpg",
      "data2": ["smiley","wood","flower", "overtime", "walk off the earth", "headphones", "taco", "guitar"]
    },
    {
      "date1": 2,
      "date2": 24,
      "venue": "Buckhead Theatre",
      "city": "Atlanta",
      "state": "Georgia",
      "game": "coloring",
      "data": "WOTE_coloring_8.png"
    },
    {
      "date1": 2,
      "date2": 24,
      "venue": "Walker Theatre",
      "city": "Chattanooga",
      "state": "Tennesee",
      "game": "puzzle",
      "data": "WOTE_slider_3.jpg"
    },
    {
      "date1": 4,
      "date2": 1,
      "venue": "State Theatre",
      "city": "Portland",
      "state": "Oregon",
      "game": "puzzle",
      "data": "WOTE_coloring_10.png"
    },
    {
      "date1": 4,
      "date2": 2,
      "venue": "The Fillmore",
      "city": "Philadelphia",
      "state": "Pennsylvania",
      "game": "puzzle",
      "data": "WOTE_slider_6.jpg"
    },
    {
      "date1": 4,
      "date2": 3,
      "venue": "The National",
      "city": "Richmond",
      "state": "Virginia",
      "game": "coloring",
      "data": "WOTE_coloring_12.png"
    },
    {
      "date1": 4,
      "date2": 5,
      "venue": "Lincoln Theatre",
      "city": "Washington",
      "state": "DC",
      "game": "waldo",
      "data": "Waldo_3.jpg",
      "data2": ["fork and knife","trophy","alien", "bubbles", "volleyball", "pineapple"]
    },
    {
      "date1": 4,
      "date2": 7,
      "venue": "Somerville Theatre",
      "city": "Somerville",
      "state": "Massachussets",
      "game": "coloring",
      "data": "WOTE_coloring_14.png"
    },
    {
      "date1": 4,
      "date2": 8,
      "venue": "Paramount Theatre",
      "city": "Ashbury Park",
      "state": "New Jersey",
      "game": "coloring",
      "data": "WOTE_coloring_15.png"
    },
    {
      "date1": 4,
      "date2": 9,
      "venue": "Whitaker Center",
      "city": "Harrisburg",
      "state": "Pennsylvania",
      "game": "coloring",
      "data": "WOTE_coloring_16.png"
    },
    {
      "date1": 4,
      "date2": 10,
      "venue": "Royal Oak Music Theatre",
      "city": "Royal Oak",
      "state": "Michigan",
      "game": "coloring",
      "data": "WOTE_coloring_17.png"
    },
    {
      "date1": 4,
      "date2": 14,
      "venue": "20 Monroe Live",
      "city": "Grand Rapids",
      "state": "Michigan",
      "game": "waldo",
      "data": "Waldo_4.jpg",
      "data2": ["dog","skull","burger", "eyeball", "moon"]
    },
    {
      "date1": 4,
      "date2": 16,
      "venue": "The Pageant",
      "city": "St. Louis",
      "state": "Missouri",
      "game": "waldo",
      "data2": ["rocket","drink","spatula", "guitar", "butterfly", "wote"],
      "data": "Waldo_5.jpg"
    },
    {
      "date1": 4,
      "date2": 17,
      "venue": "The Center for the PA",
      "city": "Carmel",
      "state": "Indiana",
      "game": "puzzle",
      "data": "WOTE_slider_4.jpg"
    },
    {
      "date1": 4,
      "date2": 18,
      "venue": "Athenaeum Theatre",
      "city": "Chicago",
      "state": "Illinois",
      "game": "coloring",
      "data": "WOTE_coloring_20.png"
    },
    {
      "date1": 4,
      "date2": 19,
      "venue": "The Fillmore",
      "city": "Minneapolis",
      "state": "Minnesota",
      "game": "puzzle",
      "data": "WOTE_slider_5.jpg"
    }
  ]

export default tourStops