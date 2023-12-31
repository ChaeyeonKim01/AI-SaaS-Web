"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Emily",
    avatar: "B",
    title: "Software Engineer",
    description:
      "Incredible Experience! This application has truly transformed the way I work.",
  },
  {
    name: "Alex",
    avatar: "C",
    title: "Software Engineer",
    description:
      "Life-Changer Alert! Using it has made my daily tasks a breeze. Highly recommended!",
  },
  {
    name: "Anna",
    avatar: "D",
    title: "Software Engineer",
    description:
      "It's not just an app; it's an essential part of my workflow. Kudos to the developers!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
