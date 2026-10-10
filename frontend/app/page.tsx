
import { AuthShell } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/sign-in-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export const instant = false;

export default async function HomePage() {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <AuthShell
      title="أهلاً بيك في يادوك"
      description="سجّل دخولك وكمل رحلتك في التدريب الطبي الذكي."
    >
      <SignInForm />
    </AuthShell>
  );
}
