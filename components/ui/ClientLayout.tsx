"use client"

import React from "react"
import PageLoader from "@/components/ui/PageLoader"
import usePageLoading from "@/hooks/usePageLoading"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const loading = usePageLoading()

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  )
}
