import React from "react";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({ table }: any) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4 gap-5">
      <span>Rows per page</span>
      <select
        value={table.getState()?.pagination?.pageSize}
        onChange={(e) => table.setPageSize(parseInt(e.target.value, 10))}
        className="flex h-10 w-[100px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      >
        {[1, 5, 10, 15, 20].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <span>
        {`Page ${
          table.getState()?.pagination?.pageIndex + 1
        } of ${table.getPageCount()}`}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronsLeft />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table?.getCanPreviousPage()}
      >
        <ChevronLeft />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRight />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronsRight />
      </Button>
    </div>
  );
};

export default Pagination;
