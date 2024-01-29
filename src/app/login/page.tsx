import { AuthButtonServer } from "@/app/components/auth-button-server";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login'
}

export default function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Iniciar sesión en X-Twitter</h1>
      <AuthButtonServer />
    </section>
  );
}
