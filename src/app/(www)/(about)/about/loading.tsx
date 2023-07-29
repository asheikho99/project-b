import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  const widthes: string[] = [
    "max-w-4xl",
    "max-w-5xl",
    "max-w-6xl",
    "max-w-7xl",
    "w-full",
  ];

  return (
    <div className="flex flex-col">
      <Skeleton className="mb-8 h-[35px] w-full max-w-lg rounded-sm" />
      <div className="flex flex-col space-y-2">
        {[...Array(25)].map((_, i) => (
          <Skeleton
            className={`w-full ${
              widthes[Math.floor(Math.random() * (widthes.length - 1))]
            }  h-[25px] rounded-sm`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
