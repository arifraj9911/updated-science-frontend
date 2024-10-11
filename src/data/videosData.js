const videosData = [
  {
    id: 1,
    subject_name: "Physics",
    subject_title:
      "Understanding Newton's Laws of Motion and their Applications",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "12k",
    uploaded_time: "5 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video covers the fundamental principles of Newton's laws of motion, explaining how these laws govern the movement of objects. It focuses on real-world examples where these laws can be applied to understand motion and force. Viewers will gain insights into how Newton's three laws—Inertia, F=ma, and Action-Reaction—are crucial to solving problems in physics. This video is especially useful for students preparing for physics exams as it includes detailed problem-solving techniques.",
  },
  {
    id: 2,
    subject_name: "Chemistry",
    subject_title: "Introduction to Chemical Bonding: Ionic and Covalent Bonds",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "8k",
    uploaded_time: "7 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video serves as an introduction to chemical bonding, focusing on the differences between ionic and covalent bonds. The lecture explains how atoms bond to form molecules, providing examples of ionic and covalent bonds in real-world substances. Viewers will also learn about bond polarity, electronegativity, and how these bonds influence the properties of compounds. This video is designed for high school and early college students preparing for chemistry exams.",
  },
  {
    id: 3,
    subject_name: "Biology",
    subject_title:
      "The Human Digestive System: Functions and Processes Explained",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "15k",
    uploaded_time: "10 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This biology video provides a comprehensive explanation of the human digestive system. It covers the key organs involved in digestion and their roles, including the mouth, esophagus, stomach, and intestines. The process of breaking down food and nutrient absorption is explored in detail, with a focus on how enzymes and digestive juices facilitate this complex system. This video is ideal for students preparing for their biology exams, providing clear and concise explanations of digestive processes.",
  },
  {
    id: 4,
    subject_name: "Mathematics",
    subject_title:
      "Solving Complex Equations Using Quadratic Formula Techniques",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "20k",
    uploaded_time: "3 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "In this video, the quadratic formula is discussed in depth, providing students with a powerful tool for solving quadratic equations. The instructor explains each step involved in using the formula, from setting up the equation to simplifying the result. Practical examples are provided to show how the quadratic formula can be applied in various mathematical problems. This lesson is crucial for students looking to master solving equations for their mathematics exams.",
  },
  {
    id: 5,
    subject_name: "Physics",
    subject_title: "Exploring Electromagnetic Waves and their Practical Uses",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "11k",
    uploaded_time: "2 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video explains the nature of electromagnetic waves, exploring how they travel and interact with matter. The instructor highlights the various types of electromagnetic waves, such as radio waves, microwaves, and X-rays, and explains their practical applications in fields such as medicine, communications, and astronomy. The video is ideal for students preparing for exams on electromagnetism and wave theory.",
  },
  {
    id: 6,
    subject_name: "Physics",
    subject_title:
      "Understanding Newton's Laws of Motion and their Applications",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "12k",
    uploaded_time: "5 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video covers the fundamental principles of Newton's laws of motion, explaining how these laws govern the movement of objects. It focuses on real-world examples where these laws can be applied to understand motion and force. Viewers will gain insights into how Newton's three laws—Inertia, F=ma, and Action-Reaction—are crucial to solving problems in physics. This video is especially useful for students preparing for physics exams as it includes detailed problem-solving techniques.",
  },
  {
    id: 7,
    subject_name: "Chemistry",
    subject_title: "Introduction to Chemical Bonding: Ionic and Covalent Bonds",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "8k",
    uploaded_time: "7 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video serves as an introduction to chemical bonding, focusing on the differences between ionic and covalent bonds. The lecture explains how atoms bond to form molecules, providing examples of ionic and covalent bonds in real-world substances. Viewers will also learn about bond polarity, electronegativity, and how these bonds influence the properties of compounds. This video is designed for high school and early college students preparing for chemistry exams.",
  },
  {
    id: 8,
    subject_name: "Biology",
    subject_title:
      "The Human Digestive System: Functions and Processes Explained",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "15k",
    uploaded_time: "10 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This biology video provides a comprehensive explanation of the human digestive system. It covers the key organs involved in digestion and their roles, including the mouth, esophagus, stomach, and intestines. The process of breaking down food and nutrient absorption is explored in detail, with a focus on how enzymes and digestive juices facilitate this complex system. This video is ideal for students preparing for their biology exams, providing clear and concise explanations of digestive processes.",
  },
  {
    id: 9,
    subject_name: "Mathematics",
    subject_title:
      "Solving Complex Equations Using Quadratic Formula Techniques",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "20k",
    uploaded_time: "3 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "In this video, the quadratic formula is discussed in depth, providing students with a powerful tool for solving quadratic equations. The instructor explains each step involved in using the formula, from setting up the equation to simplifying the result. Practical examples are provided to show how the quadratic formula can be applied in various mathematical problems. This lesson is crucial for students looking to master solving equations for their mathematics exams.",
  },
  {
    id: 10,
    subject_name: "Physics",
    subject_title: "Exploring Electromagnetic Waves and their Practical Uses",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "11k",
    uploaded_time: "2 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video explains the nature of electromagnetic waves, exploring how they travel and interact with matter. The instructor highlights the various types of electromagnetic waves, such as radio waves, microwaves, and X-rays, and explains their practical applications in fields such as medicine, communications, and astronomy. The video is ideal for students preparing for exams on electromagnetism and wave theory.",
  },
  {
    id: 11,
    subject_name: "Physics",
    subject_title:
      "Understanding Newton's Laws of Motion and their Applications",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "12k",
    uploaded_time: "5 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video covers the fundamental principles of Newton's laws of motion, explaining how these laws govern the movement of objects. It focuses on real-world examples where these laws can be applied to understand motion and force. Viewers will gain insights into how Newton's three laws—Inertia, F=ma, and Action-Reaction—are crucial to solving problems in physics. This video is especially useful for students preparing for physics exams as it includes detailed problem-solving techniques.",
  },
  {
    id: 12,
    subject_name: "Chemistry",
    subject_title: "Introduction to Chemical Bonding: Ionic and Covalent Bonds",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "8k",
    uploaded_time: "7 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video serves as an introduction to chemical bonding, focusing on the differences between ionic and covalent bonds. The lecture explains how atoms bond to form molecules, providing examples of ionic and covalent bonds in real-world substances. Viewers will also learn about bond polarity, electronegativity, and how these bonds influence the properties of compounds. This video is designed for high school and early college students preparing for chemistry exams.",
  },
  {
    id: 13,
    subject_name: "Biology",
    subject_title:
      "The Human Digestive System: Functions and Processes Explained",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "15k",
    uploaded_time: "10 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This biology video provides a comprehensive explanation of the human digestive system. It covers the key organs involved in digestion and their roles, including the mouth, esophagus, stomach, and intestines. The process of breaking down food and nutrient absorption is explored in detail, with a focus on how enzymes and digestive juices facilitate this complex system. This video is ideal for students preparing for their biology exams, providing clear and concise explanations of digestive processes.",
  },
  {
    id: 14,
    subject_name: "Mathematics",
    subject_title:
      "Solving Complex Equations Using Quadratic Formula Techniques",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "20k",
    uploaded_time: "3 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "In this video, the quadratic formula is discussed in depth, providing students with a powerful tool for solving quadratic equations. The instructor explains each step involved in using the formula, from setting up the equation to simplifying the result. Practical examples are provided to show how the quadratic formula can be applied in various mathematical problems. This lesson is crucial for students looking to master solving equations for their mathematics exams.",
  },
  {
    id: 15,
    subject_name: "Physics",
    subject_title: "Exploring Electromagnetic Waves and their Practical Uses",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "11k",
    uploaded_time: "2 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video explains the nature of electromagnetic waves, exploring how they travel and interact with matter. The instructor highlights the various types of electromagnetic waves, such as radio waves, microwaves, and X-rays, and explains their practical applications in fields such as medicine, communications, and astronomy. The video is ideal for students preparing for exams on electromagnetism and wave theory.",
  },
  {
    id: 16,
    subject_name: "Physics",
    subject_title: "Exploring Electromagnetic Waves and their Practical Uses",
    youtube_link:
      "https://www.youtube.com/embed/joJVIz6tN24?si=JCtyZR_NUHd1bt0x",
    total_views: "11k",
    uploaded_time: "2 days ago",
    short_description:
      "This video is especially useful for students preparing for  exams",
    description:
      "This video explains the nature of electromagnetic waves, exploring how they travel and interact with matter. The instructor highlights the various types of electromagnetic waves, such as radio waves, microwaves, and X-rays, and explains their practical applications in fields such as medicine, communications, and astronomy. The video is ideal for students preparing for exams on electromagnetism and wave theory.",
  },
];

export default videosData;
