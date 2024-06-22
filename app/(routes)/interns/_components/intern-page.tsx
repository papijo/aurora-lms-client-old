"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

import { InternCards } from "./intern-cards";
import { InternTable } from "./intern_table";

const InternPage = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const router = useRouter();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    GetRequest("/intern/all", accesstoken)
      .then((data) => {
        setTableData(data.data.interns);
        console.log(data.data.interns);
      })
      .catch((error) => {
        if (
          error?.response?.data?.message === "ExpiredAccessToken" ||
          error?.response?.data?.message === "MissingAccessToken"
        ) {
          router.push("/");
        } else {
          console.log("Error fetching data:", error);
        }
      });
  }, [accesstoken, router]);

  const CreateUser = () => {
    router.push("/user/create");
  };

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Create Heading Component */}
        <Heading
          title="Intern Management Module"
          description="Manage all interns from here"
        />
        {/* <h1>User Management Module</h1> */}
        <div>
          <Separator />
        </div>
        <div>
          <InternCards />
        </div>
        <div>
          <Button onClick={CreateUser} className="mt-5">
            Create New Intern
          </Button>
          <InternTable columns={columns} data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default InternPage;
