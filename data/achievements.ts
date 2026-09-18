export interface StudentParticipant {
  name: string;
  class: string;
  prize?: string;
  category?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  students: StudentParticipant[];
  event: string;
  achievement: string;
  organizer?: string;
  location?: string;
  year: string;
  isYearVerified: boolean;
  context: string;
  images: string[];
  category: "all" | "olympiad" | "mathematics" | "quiz" | "cultural";
  featured?: boolean;
}

/**
 * SOURCE OF TRUTH: contents/Achienvements 1 draft.docx
 * Note: When adding new achievements to the Word document, append corresponding records here.
 * Any uncertain dates/details are explicitly designated as unverified per school instructions.
 */
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "skk-olympiad-2023",
    title: "Champions of Knowledge: State Toppers at SKK Olympiad",
    students: [
      { name: "Pranav", class: "Class 3", prize: "State 1st Prize" },
      { name: "V. Chetan", class: "Class 5", prize: "State 1st Prize" },
    ],
    event: "SKK International Olympiad",
    achievement: "State 1st Prize",
    location: "Telangana State",
    year: "2023",
    isYearVerified: true,
    context:
      "Pranav from 3rd Standard and V. Chetan from 5th Standard secured the State 1st Prize in the SKK International Olympiad 2023. Their dedication, focus, and academic sharpness brought pride to the entire school community.",
    images: ["/achievements/skk-olympiad.jpg"],
    category: "olympiad",
    featured: true,
  },
  {
    id: "abacus-championship",
    title: "Abacus Wizards Win Big: Top 3 Prizes",
    students: [
      { name: "R. Abhijith", class: "Class 5", prize: "1st Prize (Seniors)" },
      { name: "Naren", class: "Class 5", prize: "2nd Prize" },
      { name: "Gouthami Lasya", class: "Class 4", prize: "3rd Prize (Juniors)" },
    ],
    event: "Abacus Championship",
    organizer: "Telangana Rastra Janapadalu Sangam",
    location: "Mahabubnagar",
    achievement: "Top 3 Podium Finishes",
    year: "Recent School Session",
    isYearVerified: false,
    context:
      "Universal Central School students clinched the top 3 prizes at the Abacus Championship organized by Telangana Rastra Janapadalu Sangam, Mahabubnagar. R. Abhijith secured 1st prize in Seniors, Naren bagged 2nd prize, and Gouthami Lasya earned 3rd prize in Juniors, highlighting their sharp numerical instincts and speed.",
    images: ["/achievements/abacus-championship.jpg"],
    category: "mathematics",
    featured: true,
  },
  {
    id: "ramanujan-maths-test",
    title: "District Winner in Srinivasa Ramanujan Maths Talent Test",
    students: [
      { name: "Sahithi", class: "Class 5", prize: "District 3rd Prize" },
    ],
    event: "Srinivasa Ramanujan Maths Talent Test",
    achievement: "District 3rd Prize",
    location: "Mahabubnagar District",
    year: "Recent School Session",
    isYearVerified: false,
    context:
      "Sahithi from 5th Class earned District 3rd Prize in the Srinivasa Ramanujan Maths Talent Test, showcasing exceptional analytical skills and problem-solving ability in competitive mathematics.",
    images: ["/achievements/ramanujan-math-test.jpg"],
    category: "mathematics",
    featured: true,
  },
  {
    id: "bharat-ko-jano-quiz",
    title: "Quiz Masters in Action: 2nd Prize at Bharat Ko Jano",
    students: [
      { name: "Vishwa Chaitanya", class: "Class 7", prize: "2nd Prize" },
      { name: "Varshini", class: "Class 7", prize: "2nd Prize" },
    ],
    event: "Bharat Ko Jano Quiz Competition",
    achievement: "2nd Prize",
    location: "Mahabubnagar",
    year: "Recent School Session",
    isYearVerified: false,
    context:
      "Vishwa Chaitanya and Varshini of 7th Standard demonstrated broad general awareness, rapid recall, and collaborative teamwork to capture 2nd Prize in the Bharat Ko Jano Quiz contest.",
    images: ["/achievements/bharat-ko-jano-quiz.jpg"],
    category: "quiz",
    featured: true,
  },
  {
    id: "pillalamari-telugu-katha",
    title: "Telugu Katha Rachana (Storytelling Showcase)",
    students: [
      { name: "Ananya", class: "Class 6", prize: "Participation & Merit" },
    ],
    event: "Pillalamari Balotsavam",
    location: "Mahabubnagar",
    achievement: "Showcase Selection",
    year: "2024/2025 — To be verified",
    isYearVerified: false,
    context:
      "Ananya of Class 6 participated in Telugu Katha Rachana at Pillalamari Balotsavam, Mahabubnagar, demonstrating creative narrative development and expressive storytelling in the Telugu language.",
    images: [
      "/achievements/pillalamari-balotsavam-1.jpg",
      "/achievements/pillalamari-balotsavam-2.jpg",
    ],
    category: "cultural",
    featured: false,
  },
  {
    id: "pillalamari-padyam-bhavam",
    title: "Padyam Bhavam (Telugu Poetic Recitation)",
    students: [
      { name: "Lasya", class: "Class 6", prize: "Participation & Merit" },
    ],
    event: "Pillalamari Balotsavam",
    location: "Mahabubnagar",
    achievement: "Expressive Performance",
    year: "2024/2025 — To be verified",
    isYearVerified: false,
    context:
      "Lasya of Class 6 participated in Padyam Bhavam at Pillalamari Balotsavam, presenting classic Telugu verse with clarity, rhythmic metre, and expressive bhavam.",
    images: [
      "/achievements/pillalamari-balotsavam-1.jpg",
      "/achievements/pillalamari-balotsavam-2.jpg",
    ],
    category: "cultural",
    featured: false,
  },
  {
    id: "pillalamari-group-song-dance",
    title: "Group Song & Dance Performance",
    students: [
      { name: "Chaithra", class: "Class 7", prize: "Cultural Ensemble" },
      { name: "Chatura", class: "Class 7", prize: "Cultural Ensemble" },
    ],
    event: "Pillalamari Balotsavam",
    location: "Mahabubnagar",
    achievement: "Team Cultural Showcase",
    year: "2024/2025 — To be verified",
    isYearVerified: false,
    context:
      "Chaithra and Chatura of Class 7 participated in a vibrant group song and dance performance at Pillalamari Balotsavam, exemplifying rhythm, coordination, and cultural appreciation.",
    images: [
      "/achievements/pillalamari-balotsavam-1.jpg",
      "/achievements/pillalamari-balotsavam-2.jpg",
    ],
    category: "cultural",
    featured: false,
  },
];
