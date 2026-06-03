import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("app_auth")?.value === "1";

  redirect(isAuthenticated ? "/AdminDashboard" : "/auth/login");
}
