"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  feedbacks: number
  percent_good_review: number
  name: string
  creation_date: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "feedbacks",
    header: "Feedbacks",
  },
  {
    accessorKey: "percent_good_review",
    header: "% of good reviews",
  },
  {
    accessorKey: "creation_date",
    header: "Creation Date",
  }
]
