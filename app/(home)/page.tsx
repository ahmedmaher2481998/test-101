import { detectPlatform } from "@/app/utils/detectPlatform";
import MobileComponent from "@/app/components/MobileComponent";
import DesktopComponent from "@/app/components/DesktopComponent";
import { headers } from "next/headers";
import Link from "next/link";

export const revalidate = 86400; // ISR for 1 day

export default async function Home() {
  const platform = detectPlatform(await headers());
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>
      <div className="w-full max-w-4xl">
        {platform === "mobile" ? <MobileComponent /> : <DesktopComponent />}
      </div>
      <Link href="/login" className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
        Login
      </Link>
    </div>
  );
}
