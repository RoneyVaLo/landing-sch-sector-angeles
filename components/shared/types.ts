import type { LucideIcon } from "lucide-react";

export interface Activity {
  title: string;
  category: string;
  span: string;
  bgColor: string;
  textColor: string;
  icon: LucideIcon;
  images: string[];
}

export interface FacilityImage {
  src: string;
  alt: string;
  label: string;
  description?: string;
  span: "large" | "small";
}

export interface Event {
  date: { day: string; month: string };
  title: string;
  description: string;
  fullDescription: string;
  location: string;
  time: string;
  audience: string;
}
