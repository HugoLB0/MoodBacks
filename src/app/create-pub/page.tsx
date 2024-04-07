"use client"

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import { CopyPlus, ScanEye } from "lucide-react";

export default function CreatePub() {
  return (
    <div
      id="container-page"
      className="flex flex-col items-center justify-center h-screen"
    >
      <Navbar />
      <div id="container-content" className="flex items-center gap-20">
        <h1 className="font-[Candu] text-3xl uppercase max-w-lg leading-normal text-title">
          Create your pub, <br /> Generate your QR Code, <br /> and off we go to
          look at your feedback
        </h1>
        
        <form className="bg-white flex flex-col items-start p-10 rounded-2xl gap-8 w-[600px]">
          <div className="flex w-full items-center justify-between gap-5">
            <label htmlFor="name_pub" className="text-2xl"><span className="text-title">1. </span>Name of pub :</label>
            <Input id="name_pub" type="text" placeholder="Product Collection Summer" className="w-1/2 px-4" />
          </div>

          <div className="flex items-center w-full justify-between">
            <label htmlFor="select_form" className="text-2xl"><span className="text-title">2. </span>Model of form :</label>
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Select a form" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type of forms</SelectLabel>
                  <SelectItem className="cursor-pointer" value="apple">
                    Free fields
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="banana">
                    Pre-filled fields
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="blueberry">
                    Mix of both
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-12 w-full justify-between">
            <div>
              <h2 className="text-2xl"><span className="text-title">3. </span>Import pictures :</h2>
              <p className="text-sm text-gray-600">4 pictures recommended</p>
            </div>
            <div className="w-1/2">
              <label htmlFor="fileInput" className="bg-[#363049] flex justify-center gap-3 p-3 rounded-lg text-white cursor-pointer"><CopyPlus color="white" /> Import pictures</label>
              <input className="hidden" id="fileInput" type="file" />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl flex items-center gap-2"><ScanEye color="#8E74DB" /> Preview Exemple Formulaire</h2>
            <div className="flex w-full justify-center">
              <Image className="h-80 w-auto" src="/assets/screen1.png" height={2000} width={950} alt="img" />
              <Image className="h-80 w-auto" src="/assets/screen2.png" height={2000} width={950} alt="img" />
              <Image className="h-80 w-auto" src="/assets/screen3.png" height={2000} width={950} alt="img" />
            </div>
          </div>
          <Button className="bg-[#363049] text-base px-6 py-6">Confirmer et générer un QR Code</Button>
        </form>
      </div>
    </div>
  );
}
