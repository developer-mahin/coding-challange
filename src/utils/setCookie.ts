"use server";

import { cookies } from "next/headers";

const setCookie = (userAgent: string) => {
  if (userAgent) {
    cookies().set("userAgent", userAgent);
  }
};
export default setCookie;
