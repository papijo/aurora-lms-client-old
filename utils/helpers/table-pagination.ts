"use client";
import { useState } from "react";

export function usePagination(initialState = 5) {
  const [pagination, setPagination] = useState({
    pageSize: initialState,
    pageIndex: 0,
  });
  const { pageIndex, pageSize } = pagination;

  return {
    limit: pageSize,
    onPaginationChange: setPagination,
    pagination,
    page: pageIndex + 1,
  };
}
