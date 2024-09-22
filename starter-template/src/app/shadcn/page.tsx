"use client"; // Add this directive at the top

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const ShadcnPage = () => {
  // useState is now allowed since this is a Client Component
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-gray-700 flex justify-center items-center flex-col ">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md text-slate-600"
    />
    <Button>Hello</Button>
    </div>
    
  );
};

export default ShadcnPage;
