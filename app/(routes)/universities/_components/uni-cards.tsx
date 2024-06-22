"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, School2, SchoolIcon } from "lucide-react";
import { useAppSelector } from "@/utils/redux";
import { Universities } from "@/utils/types/university";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useToast } from "@/components/ui/use-toast";

const UniCards = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const { toast } = useToast();

  const [uniData, setUniData] = useState<Universities | null>(null);

  useEffect(() => {
    GetRequest("/university/all", accesstoken)
      .then((res) => {
        setUniData(res.data);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error?.response?.data?.message,
          variant: "destructive",
        });
      });

    //   Filter
  }, [accesstoken, toast]);

  return (
    <div className="grid gap-4 grid-cols-4">
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Total</CardTitle>

            <School className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{uniData?.count}</div>
          </CardContent>
        </Card>
      </div>
      {/* <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Private Universties
            </CardTitle>

            <School2 className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div> */}
      {/* <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Public Universties
            </CardTitle>

            <School className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">Polytechnics</CardTitle>

            <SchoolIcon className="h-8 w-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
};

export default UniCards;
