export const mockDataMembers = [
    {
      id: 1,
      name: "Yash Dusane",
      email: "yashd@gmail.com",
      age: 28,
      phone: "(123) 456-7890",
      membershipType: "gold",
    },
    {
      id: 2,
      name: "Mahesh Dalle",
      email: "mahesh@gmail.com",
      age: 32,
      phone: "(987) 654-3210",
      membershipType: "silver",
    },
    {
      id: 3,
      name: "Prathamesh Bhise",
      email: "bhise@gmail.com",
      age: 35,
      phone: "(555) 123-4567",
      membershipType: "bronze",
    },
    // Add more member data as needed
  ];
  
  export const mockDataTrainers = [
    {
      id: 1,
      name: "Trainer 1",
      email: "trainer1@gmail.com",
      specialization: "Weightlifting",
    },
    {
      id: 2,
      name: "Trainer 2",
      email: "trainer2@gmail.com",
      specialization: "Yoga",
    },
    {
      id: 3,
      name: "Trainer 3",
      email: "trainer3@gmail.com",
      specialization: "Cardio",
    },
    // Add more trainer data as needed
  ];
  
  export const mockDataWorkouts = [
    {
      id: 1,
      name: "Workout 1",
      description: "Strength training for beginners",
      duration: "45 minutes",
    },
    {
      id: 2,
      name: "Workout 2",
      description: "Yoga for flexibility",
      duration: "60 minutes",
    },
    {
      id: 3,
      name: "Workout 3",
      description: "High-intensity interval training (HIIT)",
      duration: "30 minutes",
    },
    // Add more workout data as needed
  ];
  
  export const mockDataClasses = [
    {
      id: 1,
      name: "Yoga Class",
      description: "Hatha yoga for all levels",
      schedule: "Mondays and Wednesdays at 6:00 PM",
    },
    {
      id: 2,
      name: "Zumba Class",
      description: "Dance fitness party",
      schedule: "Tuesdays and Thursdays at 7:30 PM",
    },
    {
      id: 3,
      name: "Spin Class",
      description: "Indoor cycling workout",
      schedule: "Fridays at 5:30 PM and Saturdays at 9:00 AM",
    },
    // Add more class data as needed
  ];
  
  export const mockDataInstructors = [
    {
      id: 1,
      name: "Instructor 1",
      email: "instructor1@gmail.com",
      class: "Yoga Class",
    },
    {
      id: 2,
      name: "Instructor 2",
      email: "instructor2@gmail.com",
      class: "Zumba Class",
    },
    {
      id: 3,
      name: "Instructor 3",
      email: "instructor3@gmail.com",
      class: "Spin Class",
    },
    // Add more instructor data as needed
  ];
  
  export const mockDataEquipment = [
    {
      id: 1,
      name: "Bars",
      type: "Cardio",
      quantity: 10,
    },
    {
      id: 2,
      name: "Dumbbells",
      type: "Strength",
      quantity: 20,
    },
    {
      id: 3,
      name: "Yoga Mats",
      type: "Yoga",
      quantity: 30,
    },
    // Add more equipment data as needed
  ];
  
  export const mockBarData = [
    {
      id: 1,
      name: "Yash Dusane",
      email: "yashd@gmail.com",
      age: 28,
      phone: "(123) 456-7890",
      membershipType: "gold",
      dailyWorkoutCompleted: 2,
      caloriesBurned: 500,
      weightLoss: 2.5, // in kilograms
      weightGain: 1.0, // in kilograms
      weight: 75,  // in kilograms
      height: 175, // in centimeters
      bmi: 24.49,
    },
    {
      id: 2,
      name: "Mahesh Dalle",
      email: "mahesh@gmail.com",
      age: 32,
      phone: "(987) 654-3210",
      membershipType: "silver",
      dailyWorkoutCompleted: 1,
      caloriesBurned: 300,
      weightLoss: 1.2, // in kilograms
      weightGain: 0.5, // in kilograms
      weight: 60,  // in kilograms
      height: 162, // in centimeters
      bmi: 22.99,
    },
    {
      id: 3,
      name: "Prathamesh Bhise",
      email: "bhise@gmail.com",
      age: 35,
      phone: "(555) 123-4567",
      membershipType: "bronze",
      dailyWorkoutCompleted: 3,
      caloriesBurned: 700,
      weightLoss: 3.0, // in kilograms
      weightGain: 1.2, // in kilograms
      weight: 80,  // in kilograms
      height: 178, // in centimeters
      bmi: 25.92,
    },
    {
      id: 4,
      name: "Pranav Gaikwad",
      email: "pranav@gmail.com",
      age: 35,
      phone: "(555) 123-4567",
      membershipType: "bronze",
      dailyWorkoutCompleted: 3,
      caloriesBurned: 700,
      weightLoss: 3.0, // in kilograms
      weightGain: 1.2, // in kilograms
      weight: 82,  // in kilograms
      height: 178, // in centimeters
      bmi: 25.92,
    },
    // Add more member data as needed
  ];
  
  export const mockPieData = [
    {
      id: "completed",
      label: "Completed",
      value: 70, // Change this value to represent the percentage of completed workouts
      color: "hsl(120, 70%, 50%)",
    },
    {
      id: "remaining",
      label: "Remaining",
      value: 30, // Change this value to represent the percentage of remaining workouts
      color: "hsl(0, 70%, 50%)",
    },
  ];

  export const mockLineData = [
    {
      id: "user1",
      color: "hsl(120, 70%, 50%)",
      data: [
        { x: "Day 1", y: 1 }, // User 1 completed workout properly (1)
        { x: "Day 2", y: 1 }, // User 1 completed workout properly (1)
        { x: "Day 3", y: 0 }, // User 1 did not complete workout properly (0)
        { x: "Day 4", y: 1 }, // User 1 completed workout properly (1)
        { x: "Day 5", y: 0 }, // User 1 did not complete workout properly (0)
        // Add more data points for user1 as needed
      ],
    },
    {
      id: "user2",
      color: "hsl(0, 70%, 50%)",
      data: [
        { x: "Day 1", y: 1 }, // User 2 completed workout properly (1)
        { x: "Day 2", y: 0 }, // User 2 did not complete workout properly (0)
        { x: "Day 3", y: 1 }, // User 2 completed workout properly (1)
        { x: "Day 4", y: 0 }, // User 2 did not complete workout properly (0)
        { x: "Day 5", y: 1 }, // User 2 completed workout properly (1)
        // Add more data points for user2 as needed
      ],
    },
    // Add more users' data as needed
  ];
  
  export const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];
  
  
  
  