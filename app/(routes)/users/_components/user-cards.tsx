"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { Users as users } from "@/utils/types/user";
import { BookUser, UserCircle2Icon, UserCog, Users } from "lucide-react";
import { useEffect, useState } from "react";

export const UserCards = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);

  const [userData, setUserData] = useState<users | null>(null);

  useEffect(() => {
    GetRequest("/user/all", accesstoken).then((res) => {
      setUserData(res.data);
    });
  }, [accesstoken]);

  return (
    <div className="grid gap-4 grid-cols-4">
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Users Total</CardTitle>

            <Users className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData?.totalCount}</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Admin</CardTitle>

            <UserCog className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData?.adminCount}</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Students</CardTitle>

            <BookUser className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData?.studentCount}</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Teachers</CardTitle>

            <UserCircle2Icon className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData?.teacherCount}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
