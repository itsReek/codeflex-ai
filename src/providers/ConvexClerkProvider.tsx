"use client";

import React from "react"; // Added this to fix the red line on React.ReactNode
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth(); // ✅ call hook at top

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk
        client={convex}
        useAuth={useAuth} // Simplified this line
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export default ConvexClerkProvider;