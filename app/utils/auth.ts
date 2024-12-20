"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function isAuthed(): Promise<boolean> {
  const authCookie = (await cookies()).get("auth")?.value || "false" 
  console.log("🚀 ~ isAuthed ~ authCookie:", authCookie)
  return authCookie === "true";
}

export async function setAuth(path: string) {
  (await cookies()).set("auth", "true");
  revalidatePath(path);
}

export async function clearAuth(path: string) {
  (await cookies()).delete("auth");
  revalidatePath(path);
}
