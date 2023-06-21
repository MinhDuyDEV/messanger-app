"use client";
import EmptyState from "@/components/EmptyState";
import { signOut } from "next-auth/react";
import React from "react";

const UsersPage = () => {
  return (
    <div className="hidden h-full lg:block lg:pl-80">
      <EmptyState></EmptyState>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default UsersPage;
