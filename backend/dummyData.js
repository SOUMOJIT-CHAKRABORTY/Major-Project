const dummyTrainData = [
  {
    trainName: "Rajdhani Express",
    trainNumber: "12301",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "07:00", station: "New Delhi", date: "2023-12-01" },
      { departureTime: "13:30", station: "Kanpur", date: "2023-12-01" },
      {
        departureTime: "19:45",
        station: "Howrah Junction",
        date: "2023-12-01",
      },
    ],
    classes: [
      { className: "AC 1 Tier", availability: "Refresh" },
      { className: "AC 2 Tier", availability: "Refresh" },
      { className: "AC 3 Tier", availability: "Refresh" },
    ],
  },
  {
    trainName: "Shatabdi Express",
    trainNumber: "12002",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "06:00", station: "Mumbai Central", date: "2023-12-02" },
      { departureTime: "10:30", station: "Surat", date: "2023-12-02" },
      { departureTime: "14:45", station: "Ahmedabad", date: "2023-12-02" },
    ],
    classes: [
      { className: "AC Chair Car", availability: "Refresh" },
      { className: "Executive Class", availability: "Refresh" },
    ],
  },
  // Add more dummy data as needed
  {
    trainName: "Expressway Superfast",
    trainNumber: "56789",
    runsOn: "MTWTFSS",
    schedule: [
      {
        departureTime: "06:30",
        station: "Chennai Central",
        date: "2023-12-05",
      },
      {
        departureTime: "10:15",
        station: "Vellore Cantonment",
        date: "2023-12-05",
      },
      { departureTime: "12:45", station: "Salem Junction", date: "2023-12-05" },
      { departureTime: "15:30", station: "Erode Junction", date: "2023-12-05" },
      {
        departureTime: "18:45",
        station: "Coimbatore Junction",
        date: "2023-12-05",
      },
      {
        departureTime: "21:00",
        station: "Palakkad Junction",
        date: "2023-12-05",
      },
      { departureTime: "23:30", station: "Thrissur", date: "2023-12-05" },
      {
        departureTime: "02:15",
        station: "Ernakulam Junction",
        date: "2023-12-06",
      },
      { departureTime: "05:45", station: "Kottayam", date: "2023-12-06" },
      {
        departureTime: "08:30",
        station: "Kollam Junction",
        date: "2023-12-06",
      },
      {
        departureTime: "11:00",
        station: "Thiruvananthapuram Central",
        date: "2023-12-06",
      },
    ],
    classes: [
      { className: "Sleeper Class", availability: "Refresh" },
      { className: "AC 3 Tier", availability: "Refresh" },
    ],
  },
  {
    trainName: "Southern Star",
    trainNumber: "98765",
    runsOn: "MTWTFSS",
    schedule: [
      {
        departureTime: "08:00",
        station: "Bangalore City Junction",
        date: "2023-12-07",
      },
      {
        departureTime: "10:45",
        station: "Mysuru Junction",
        date: "2023-12-07",
      },
      { departureTime: "13:30", station: "Hassan", date: "2023-12-07" },
      {
        departureTime: "16:15",
        station: "Mangalore Central",
        date: "2023-12-07",
      },
      { departureTime: "19:30", station: "Udupi", date: "2023-12-07" },
      { departureTime: "22:00", station: "Karwar", date: "2023-12-07" },
      { departureTime: "01:30", station: "Goa", date: "2023-12-08" },
      { departureTime: "04:45", station: "Ratnagiri", date: "2023-12-08" },
      { departureTime: "07:30", station: "Chiplun", date: "2023-12-08" },
      { departureTime: "11:15", station: "Panvel", date: "2023-12-08" },
      { departureTime: "14:00", station: "Mumbai CST", date: "2023-12-08" },
    ],
    classes: [
      { className: "AC 2 Tier", availability: "Refresh" },
      { className: "AC Chair Car", availability: "Refresh" },
    ],
  },
  {
    trainName: "Deccan Queen",
    trainNumber: "76543",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "07:00", station: "Pune Junction", date: "2023-12-09" },
      { departureTime: "09:45", station: "Lonavala", date: "2023-12-09" },
      {
        departureTime: "12:30",
        station: "Kalyan Junction",
        date: "2023-12-09",
      },
      { departureTime: "15:15", station: "Karjat", date: "2023-12-09" },
      {
        departureTime: "18:30",
        station: "Kalyan Junction",
        date: "2023-12-09",
      },
      { departureTime: "21:45", station: "Lonavala", date: "2023-12-09" },
      { departureTime: "00:30", station: "Pune Junction", date: "2023-12-10" },
    ],
    classes: [
      { className: "AC Chair Car", availability: "Refresh" },
      { className: "Sleeper Class", availability: "Refresh" },
    ],
  },
  {
    trainName: "Golden Temple Mail",
    trainNumber: "65432",
    runsOn: "MTWTFSS",
    schedule: [
      {
        departureTime: "05:30",
        station: "Amritsar Junction",
        date: "2023-12-11",
      },
      {
        departureTime: "08:15",
        station: "Jalandhar Junction",
        date: "2023-12-11",
      },
      {
        departureTime: "10:45",
        station: "Ludhiana Junction",
        date: "2023-12-11",
      },
      {
        departureTime: "13:30",
        station: "Ambala Cantt Junction",
        date: "2023-12-11",
      },
      { departureTime: "16:45", station: "New Delhi", date: "2023-12-11" },
      {
        departureTime: "20:00",
        station: "Mathura Junction",
        date: "2023-12-11",
      },
      {
        departureTime: "22:30",
        station: "Agra Cantt Junction",
        date: "2023-12-11",
      },
      {
        departureTime: "01:15",
        station: "Gwalior Junction",
        date: "2023-12-12",
      },
      {
        departureTime: "04:30",
        station: "Jhansi Junction",
        date: "2023-12-12",
      },
      {
        departureTime: "07:15",
        station: "Bhopal Junction",
        date: "2023-12-12",
      },
      {
        departureTime: "10:45",
        station: "Itarsi Junction",
        date: "2023-12-12",
      },
      {
        departureTime: "14:00",
        station: "Jabalpur Junction",
        date: "2023-12-12",
      },
      { departureTime: "17:30", station: "Katni Junction", date: "2023-12-12" },
      { departureTime: "20:45", station: "Satna Junction", date: "2023-12-12" },
      {
        departureTime: "23:15",
        station: "Allahabad Junction",
        date: "2023-12-12",
      },
      {
        departureTime: "02:00",
        station: "Mughalsarai Junction",
        date: "2023-12-13",
      },
      {
        departureTime: "05:30",
        station: "Varanasi Junction",
        date: "2023-12-13",
      },
      { departureTime: "09:15", station: "Ballia", date: "2023-12-13" },
      {
        departureTime: "12:30",
        station: "Chhapra Junction",
        date: "2023-12-13",
      },
      {
        departureTime: "15:45",
        station: "Hajipur Junction",
        date: "2023-12-13",
      },
      { departureTime: "19:00", station: "Patna Junction", date: "2023-12-13" },
    ],
    classes: [
      { className: "AC 2 Tier", availability: "Refresh" },
      { className: "Sleeper Class", availability: "Refresh" },
    ],
  },
  {
    trainName: "Ganges Express",
    trainNumber: "54321",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "06:45", station: "Sealdah", date: "2023-12-14" },
      {
        departureTime: "08:30",
        station: "Naihati Junction",
        date: "2023-12-14",
      },
      {
        departureTime: "10:15",
        station: "Barddhaman Junction",
        date: "2023-12-14",
      },
      { departureTime: "12:00", station: "Durgapur", date: "2023-12-14" },
      { departureTime: "13:45", station: "Asansol", date: "2023-12-14" },
      {
        departureTime: "15:30",
        station: "Dhanbad Junction",
        date: "2023-12-14",
      },
      { departureTime: "17:15", station: "Gaya Junction", date: "2023-12-14" },
      {
        departureTime: "19:00",
        station: "Pt. Deen Dayal Upadhyaya Junction",
        date: "2023-12-14",
      },
      {
        departureTime: "21:45",
        station: "Varanasi Junction",
        date: "2023-12-14",
      },
      {
        departureTime: "23:30",
        station: "Allahabad Junction",
        date: "2023-12-14",
      },
      { departureTime: "02:15", station: "Kanpur Central", date: "2023-12-15" },
      {
        departureTime: "05:00",
        station: "Lucknow Charbagh",
        date: "2023-12-15",
      },
      {
        departureTime: "07:45",
        station: "Faizabad Junction",
        date: "2023-12-15",
      },
      {
        departureTime: "10:30",
        station: "Ayodhya Junction",
        date: "2023-12-15",
      },
      {
        departureTime: "12:15",
        station: "Barabanki Junction",
        date: "2023-12-15",
      },
      { departureTime: "14:00", station: "Gonda Junction", date: "2023-12-15" },
      { departureTime: "16:45", station: "Bahraich", date: "2023-12-15" },
      { departureTime: "19:30", station: "Balrampur", date: "2023-12-15" },
      { departureTime: "22:15", station: "Shravasti", date: "2023-12-15" },
      {
        departureTime: "01:00",
        station: "Gorakhpur Junction",
        date: "2023-12-16",
      },
    ],
    classes: [
      { className: "AC 3 Tier", availability: "Refresh" },
      { className: "Sleeper Class", availability: "Refresh" },
    ],
  },
  {
    trainName: "Vande Bharat Express",
    trainNumber: "22436",
    runsOn: "MTWTFSS",
    schedule: [
      {
        departureTime: "09:15",
        station: "Howrah Junction",
        date: "2023-12-03",
      },
      { departureTime: "14:30", station: "New Jalpaiguri", date: "2023-12-03" },
    ],
    classes: [
      { className: "AC Chair Car", availability: "Refresh" },
      { className: "AC Executive Class", availability: "Refresh" },
    ],
  },
  {
    trainName: "Duronto Express",
    trainNumber: "12245",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "08:00", station: "Kolkata", date: "2023-12-04" },
      { departureTime: "14:30", station: "Puri", date: "2023-12-04" },
    ],
    classes: [
      { className: "AC 1 Tier", availability: "Refresh" },
      { className: "AC 2 Tier", availability: "Refresh" },
      { className: "AC 3 Tier", availability: "Refresh" },
    ],
  },
  {
    trainName: "Palace on Wheels",
    trainNumber: "12345",
    runsOn: "MTWTFSS",
    schedule: [
      { departureTime: "18:30", station: "Delhi Cantt", date: "2023-12-18" },
      { departureTime: "20:00", station: "Jaipur", date: "2023-12-18" },
      { departureTime: "23:00", station: "Sawai Madhopur", date: "2023-12-18" },
      { departureTime: "08:00", station: "Chittorgarh", date: "2023-12-19" },
      { departureTime: "12:30", station: "Udaipur", date: "2023-12-19" },
      { departureTime: "16:00", station: "Jaisalmer", date: "2023-12-19" },
      { departureTime: "10:00", station: "Jodhpur", date: "2023-12-20" },
      { departureTime: "06:00", station: "Bharatpur", date: "2023-12-21" },
      { departureTime: "11:00", station: "Agra Cantt", date: "2023-12-21" },
      { departureTime: "15:30", station: "Delhi Cantt", date: "2023-12-21" },
    ],
    classes: [
      { className: "Deluxe Cabin", availability: "Refresh" },
      { className: "Super Deluxe Cabin", availability: "Refresh" },
    ],
  },
  // Add more dummy data as needed
];

module.exports = dummyTrainData;
