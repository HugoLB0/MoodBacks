"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  rating: number
  recommend: "TRUE" | "FALSE"
  email: string
  textFeedback: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "rating",
    header: "User rating",
  },
  {
    accessorKey: "recommend",
    header: "Recommend",
  },
  {
    accessorKey: "textFeedback",
    header: "Feedback",
  },
]
