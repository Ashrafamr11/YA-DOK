
import { AuthShell } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export const instant = false;

export default async function SignUpPage() {
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
      title="ابدأ رحلتك مع يادوك"
      description="أنشئ حسابك وخُد أول خطوة في التدريب الطبي الذكي."
    >
      <SignUpForm />
    </AuthShell>
  );
}
