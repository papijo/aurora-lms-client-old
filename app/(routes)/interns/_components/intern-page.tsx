"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useAppSelector } from "@/utils/redux";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { InternCards } from "./intern-cards";
import { InternTable } from "./intern_table";
import { CreateIntern } from "./intern-create";
import { usePagination } from "@/utils/helpers/table-pagination";
import { useToast } from "@/components/ui/use-toast";

const InternPage = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const router = useRouter();
  const [tableData, setTableData] = useState([]);
  const { toast } = useToast();
  const [totalCount, setTotalCount] = useState(0);

  const { limit, onPaginationChange, page, pagination } = usePagination();

  useEffect(() => {
    GetRequest("/intern/all", accesstoken, { page, limit })
      .then((data) => {
        setTableData(data.data.interns);
        setTotalCount(data.data.totalCount);
        console.log("Page Count", data.data.totalCount);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error?.response?.data?.message,
          variant: "destructive",
        });
      });
  }, [accesstoken, limit, page, toast]);

  const pageCount = Math.ceil(totalCount / limit);

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
          <CreateIntern />
          <InternTable
            columns={columns}
            data={tableData}
            pageCount={pageCount}
            pagination={pagination}
            onPaginationChange={onPaginationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InternPage;
