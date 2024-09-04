"use client";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import withAuth from "@/hooks/with-auth";
import React from "react";
import { SubHeading } from "@/components/sub-heading";

import { DashboardTrainingData } from "./dashboard-training-data";
import { DashboardUserAnalytics } from "./dashboard-user-analytics";

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
        <SubHeading
          title="User Analytics"
          description="Departmental Human Resource Data"
        />
        <DashboardUserAnalytics />

        <div>
          <Separator />
        </div>

        {/* Course Data */}
        <SubHeading
          title="Training Programs"
          description="Training Program Data Collation"
        />
        <DashboardTrainingData />

        <div>
          <Separator />
        </div>

        <SubHeading title="Messages" description="Chats and Notifications" />

        <div>News</div>
        <div>Internal Information</div>
        <div>Coming Soon</div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
