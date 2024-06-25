"use client";

import {
  SidebarContext,
  SidebarContextProps,
} from "@/contexts/sidebar_context";
import { useContext } from "react";

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
