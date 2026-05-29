"use client";

import { useCallback, useState } from "react";
import type { Role } from "@/types";
import HeroSection from "@/components/HeroSection";
import RoleCard from "@/components/RoleCard";
import MenteeLoginCard from "@/components/MenteeLoginCard";
import MenteeSignUpCard from "@/components/MenteeSignUpCard";
import { selectRole } from "@/services/roleService";

type View = "none" | "roleSelect" | "login" | "signUp";

export default function LandingPage() {
  const [view, setView] = useState<View>("none");
  const [activeRole, setActiveRole] = useState<Role | null>(null);

  const closeDialog = useCallback(() => setView("none"), []);
  const showRoleSelect = useCallback(() => setView("roleSelect"), []);
  const showSignUp = useCallback(() => setView("signUp"), []);
  const showLogin = useCallback(() => setView("login"), []);

  const handleSelectRole = useCallback(async (role: Role) => {
    await selectRole(role);
    setActiveRole(role);
    setView("login");
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection onGetStarted={showRoleSelect} />

      {view === "roleSelect" && (
        <RoleCard onSelectRole={handleSelectRole} onClose={closeDialog} />
      )}

      {view === "login" && activeRole && (
        <MenteeLoginCard
          role={activeRole}
          onClose={closeDialog}
          onSignUp={showSignUp}
        />
      )}

      {view === "signUp" && activeRole && (
        <MenteeSignUpCard
          role={activeRole}
          onClose={closeDialog}
          onBackToLogin={showLogin}
        />
      )}
    </main>
  );
}
