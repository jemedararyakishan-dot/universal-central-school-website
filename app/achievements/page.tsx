import type { Metadata } from "next";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements | Universal Central School",
  description:
    "Official student achievement archive for Universal Central School, Mahabubnagar. Celebrating Olympiad winners, Abacus champions, and cultural honors.",
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
