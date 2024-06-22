"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { UserCards } from "./user-cards";
import { UserTable } from "./user_table";
import { columns } from "./columns";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { useRouter } from "next/navigation";
import { Header } from "@/components/auth/header";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import withAuth from "@/hooks/with-auth";
import { useToast } from "@/components/ui/use-toast";

const UserPage = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const router = useRouter();
  const [tableData, setTableData] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    GetRequest("/user/all", accesstoken)
      .then((res) => {
        setTableData(res.data.users);
      })
      .catch((error) => {
        if (
          error.response.data.message === "ExpiredAccessToken" ||
          error.response.data.message === "MissingAccessToken"
        ) {
          router.push("/");
        } else {
          toast({
            title: "Error",
            description: error?.response?.data?.message,
            variant: "destructive",
          });
        }
      });
  }, [accesstoken, router, toast]);

  const CreateUser = () => {
    router.push("/user/create");
  };

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Create Heading Component */}
        <Heading
          title="User Management Module"
          description="Manage all users (student, staff and admin) from here"
        />
        {/* <h1>User Management Module</h1> */}
        <div>
          <Separator />
        </div>
        <div>
          <UserCards />
        </div>
        <div>
          <Button onClick={CreateUser} className="mt-5">
            Create New User
          </Button>
          <UserTable columns={columns} data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default withAuth(UserPage);
