import { detectPlatform } from "@/app/utils/detectPlatform";
import { headers } from "next/headers";
import "./index.css";

export default async function PlatformWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const platform = detectPlatform(await headers());

  return (
    <>
      <div>
        <h4>platform: {platform}</h4>
      </div>
      <hr />
      <div
        className={platform === "mobile" ? "mobile-layout" : "desktop-layout"}
      >
        {children}
      </div>
    </>
  );
}
