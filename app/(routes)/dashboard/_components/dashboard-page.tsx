"use client";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import withAuth from "@/hooks/with-auth";
import React from "react";
import { SubHeading } from "@/components/sub-heading";
import { DashboardCounters } from "./dashboard-counters";
import { DashboardTrainingData } from "./dashboard-training-data";

const Dashboard = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Create Heading Component */}
        <Heading title="Dashboard" description="Welcome to Aurora LMS." />

        <div>
          <Separator />
        </div>

        {/* Counters */}
        <SubHeading title="Analytics" description="Data Driven Insights" />
        <DashboardCounters />

        <div>
          <Separator />
        </div>

        {/* Course Data */}
        <SubHeading
          title="Department Information"
          description="Training Data Collation"
        />

        <DashboardTrainingData />
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
