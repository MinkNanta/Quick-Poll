import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function ProfilePic() {
  const { user, userName } = useAuth();

  return (
    <div className="w-6 h-6 rounded-full bg-blue_sup text-center text-bg_main font-medium">
      {userName?.slice(0, 1).toLocaleUpperCase()}
    </div>
  );
}
