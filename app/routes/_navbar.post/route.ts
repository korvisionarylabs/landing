import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const { type } = params;

  if (["news", "portfolio"].indexOf(type || "") === -1) {
    return redirect("/post/news");
  }

  return { type };
}
