"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { Interns } from "@/utils/types/intern";

import { BookUser, UserCircle2Icon, UserCog, Users } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const InternCards = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);

  const [internData, setInternData] = useState<Interns | null>(null);

  useEffect(() => {
    GetRequest("/intern/all", accesstoken)
      .then((data) => {
        setInternData(data.data);
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  }, [accesstoken]);

  return (
    <div className="grid gap-4 grid-cols-4">
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Interns Total</CardTitle>

            <Users className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{internData?.totalCount}</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Active Interns
            </CardTitle>

            <UserCog className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {internData?.activeInternCount}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Graduated Interns
            </CardTitle>

            <BookUser className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {internData?.graduatedInternCount}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Transferred Interns
            </CardTitle>

            <UserCircle2Icon className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {internData?.transferredInternCount}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
