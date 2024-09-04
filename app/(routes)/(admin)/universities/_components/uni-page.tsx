"use client";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import UniCards from "./uni-cards";
import { useAppSelector } from "@/utils/redux";
import { GetRequest } from "@/utils/helpers/request-methods";
import { useToast } from "@/components/ui/use-toast";
import { columns } from "./columns";
import { UniTable } from "./uni_table";
import { CreateUniversity } from "./uni-create";
import { usePagination } from "@/utils/helpers/table-pagination";
import withAuth from "@/hooks/with-auth";

// Create University

const UniPage = () => {
  const accesstoken = useAppSelector((state) => state.auth.accesstoken);
  const [tableData, setTableData] = useState([]);
  const { toast } = useToast();
  const [totalCount, setTotalCount] = useState(0);

  const { limit, onPaginationChange, page, pagination } = usePagination();

  useEffect(() => {
    GetRequest("/university", accesstoken, { page, limit })
      .then((res) => {
        setTableData(res.data.universities);
        setTotalCount(res.data.count);
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
        <Heading title="University" description="Manage University Profiles" />

        <div>
          <Separator />
        </div>

        <div>
          <UniCards />
        </div>

        <div>
          <CreateUniversity />
          <UniTable
            data={tableData}
            columns={columns}
            pageCount={pageCount}
            onPaginationChange={onPaginationChange}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
};

export default UniPage;
