import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

// Esta  línea es para que no cachee de forma
// estática la ruta y que siempre se ejecute en el servidor
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url); // -> Crea una instancia de la URL.
  const code = requestUrl.searchParams.get("code"); // -> Acceder a los searchParams, en este caso nos interesa el código que envía Github.

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code); // -> Usando el código pasado por la URL, nos devuelve la sesión del usuario.
  }

  return NextResponse.redirect(requestUrl.origin); // -> Redirecciona al origen dónde el usuario intentó ingresar sin credenciales.
}
