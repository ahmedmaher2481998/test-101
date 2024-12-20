import { isAuthed } from "@/app/utils/auth";
import { detectPlatform } from "@/app/utils/detectPlatform";
import MobileComponent from "@/app/components/MobileComponent";
import DesktopComponent from "@/app/components/DesktopComponent";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function AuthedPage() {
  const platform = detectPlatform(await headers());
  const authed = await isAuthed();

  if (!authed) {
    return <div>You need to log in first.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h3 className="text-lg text-gray-600 mb-2">-- {authed} --</h3>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Authenticated Page</h1>
      <div className="w-full max-w-4xl">
        {platform === "mobile" ? <MobileComponent /> : <DesktopComponent />}
      </div>
    </div>
  );
}
