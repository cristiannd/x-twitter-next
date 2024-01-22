"use client"

import { useParams } from "next/navigation"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
  const params = useParams()

  return <div>Error of specific page. Id {params?.id} does not exist</div>
}