"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Copy,
  Home,
  LineChart,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
  RefreshCcw,
  Mic
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { DataTable } from "./payments/data-table";
import { columns } from "./payments/columns";

import Graph1 from "@/components/ui/graph1";
import Graph2 from "@/components/ui/graph2";
import Graph3 from "@/components/ui/graph3";
import Navbar from "@/components/ui/navbar";

const data = [
  {
    id: "1",
    feedbacks: 5,
    percent_good_review: 80,
    name: "AIR MAX",
    creation_date: "05/04/24",
  },
  {
    id: "1",
    feedbacks: 5,
    percent_good_review: 80,
    name: "AIR FORCE",
    creation_date: "05/04/24",
  },
  {
    id: "1",
    feedbacks: 5,
    percent_good_review: 80,
    name: "Maillot FFF exterior game",
    creation_date: "05/04/24",
  },
  {
    id: "1",
    feedbacks: 5,
    percent_good_review: 80,
    name: "TN",
    creation_date: "05/04/24",
  },
  {
    id: "1",
    feedbacks: 5,
    percent_good_review: 80,
    name: "Sweet Collection",
    creation_date: "05/04/24",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-backgroundbg min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-screen justify-center">
        <header
          id="header-burger-menu"
          className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/dashboard"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/orders"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="/products"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="/customers"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <div className="flex justify-end"><h1 className="mr-32 text-3xl bg-[#363049] text-[#D174DB] py-2 px-8 rounded-full font-[Candu] uppercase">Nike</h1></div>
        <main
          id="main-content"
          className="grid gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 h-[800px]"
        >
          <div
            id="left-container"
            className="grid auto-rows-max items-start gap-2 md:gap-6 lg:col-span-2 h-64"
          >
            <div
              id="graphs"
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 min-h-52"
            >
              <Card className="h-64">
                <CardDescription className="pb-8 text-title">Number of feedbacks per rating</CardDescription>
                <span></span>
                <Graph1 />
              </Card>
              <Card className="h-64">
                <CardDescription className="pb-8 text-title">Ratio good and bad feedbacks </CardDescription>
                <Graph2 />
              </Card>
              <Card className="h-64">
                <CardDescription className="pb-8 text-title">People's emotions</CardDescription>
                <Graph3 />
              </Card>
            </div>
            <Tabs defaultValue="week" id="publicities">
              <TabsContent value="week">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle className="text-title">Publicities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={data} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card id="chat-ia" className="h-full flex flex-col justify-between bg-[#ffffff]">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Talk with your data
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Last Updated: 3h ago</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <RefreshCcw className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Refresh
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Share</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-8 text-sm flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="Write something..."
                  className=" border border-gray-300 p-4 rounded-xl w-full outline-[#747CDB]"
                />
                <Button className="h-full w-20 bg-[#747CDB] outline-[#747CDB]"><Mic /></Button>
                <Button className="h-full w-20 bg-[#747CDB] outline-[#747CDB]">Go</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
