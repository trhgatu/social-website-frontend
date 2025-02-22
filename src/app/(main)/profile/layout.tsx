'use client';

import { useAuth } from "@/shared/contexts/auth-context";
import CoverPhoto from "./components/cover-photo";
import ProfileHeader from "./components/profile-header";
import ProfileTabs from "./components/profile-tabs";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <div className="max-w-4xl mx-auto">
      <CoverPhoto user={user} />
      <ProfileHeader user={user} />
      <ProfileTabs/>
      <div className="mt-4">{children}</div>
    </div>
  );
}
