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
    <div>
      <h3>-- {authed} --</h3>
      <h1>Authenticated Page</h1>
      {platform === "mobile" ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}
