"use client";
import { BLOG_DATA } from "@/data/blog";
import { useState } from "react";

export default function Blog() {
  const [key, setKey] = useState<string>("Technology");

  return (
    <>
      <div className="font-sans p-4">
        <ul className="flex">
          {Object.keys(BLOG_DATA).map((tabTitle) => (
            <li
              id="homeTab"
              onClick={() => setKey(tabTitle)}
              className={`tab ${tabTitle == key ? "text-blue-600" : "text-gray-600"} font-bold text-[15px] py-2.5 px-5 border-b-2 ${tabTitle == key ? "border-blue-600" : "border-transparent"}  cursor-pointer`}
            >
              {tabTitle}
            </li>
          ))}
        </ul>
      </div>
      {/* Cards */}
      {BLOG_DATA[`${key}`].map((blog: any) => (
        <>
          <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
            <div className="min-h-[256px]">
              <img
                src="https://readymadeui.com/Imagination.webp"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-gray-800 text-xl font-bold">{blog.title}</h3>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                {blog.content.slice(0, 100) + "..."}
              </p>
              <button
                type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                View
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
