"use client"

import { Dashboard } from "@/components/Dashboard";
import { useSession } from "next-auth/react";

const WorkPage = () => {

  const { data: session } = useSession()
  
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default WorkPage;