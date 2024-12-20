import { detectPlatform } from "@/app/utils/detectPlatform";
import MobileComponent from "@/app/components/MobileComponent";
import DesktopComponent from "@/app/components/DesktopComponent";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 86400; // ISR for 1 day

export default async function Home() {
  const platform = detectPlatform(await headers());
  return (
    <div>
      <h1>Home Page</h1>
      {platform === "mobile" ? <MobileComponent /> : <DesktopComponent />}
      <Link href="/login">login</Link>
    </div>
  );
}
