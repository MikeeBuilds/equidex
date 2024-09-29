"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

const FounderForm = dynamic(() => import("./forms/FounderForm"), {
  loading: () => <h1>Loading...</h1>,
});
const CoFounderForm = dynamic(() => import("./forms/CofounderForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  founder: (type, data) => <FounderForm type={type} data={data} />,
  cofounder: (type, data) => <CoFounderForm type={type} data={data} />,
  
  // Add other mappings as needed
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "founder"
    | "builder"
    | "cofounder"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-dexYellow"
      : type === "update"
      ? "bg-dexSky"
      : "bg-dexPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form action="" className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
            Delete
          </button>
        </form>
      );
    } else if (type === "create" || type === "update") {
      const formFunction = forms[table];
      if (typeof formFunction === "function") {
        return formFunction(type, data);
      } else {
        return "Form not found!";
      }
    } else {
      return "Form not found!";
    }
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type === "create" ? "plus" : type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;