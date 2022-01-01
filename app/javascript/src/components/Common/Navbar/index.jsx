import React from "react";

import { UserCircle, NeetoInsights, Keyboard } from "neetoicons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

const sidebarLinks = [
  {
    icon: function noRefCheck() {
      return <Keyboard size={24} />;
    },
    label: "Notes",
    to: "/notes"
  },
  {
    icon: function noRefCheck() {
      return <UserCircle size={24} />;
    },
    label: "Contact",
    to: "/contacts"
  },
  {
    icon: function noRefCheck() {
      return <NeetoInsights size={24} />;
    },
    items: [
      {
        label: "Change Password",
        to: "/form-elements/input"
      },
      {
        label: "Preferences",
        to: "/form-elements/select"
      },
      {
        label: "Settings",
        to: "/form-elements/Toggles"
      }
    ],
    label: "Settings",
    to: "/form-elements"
  }
];

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed
        navLinks={sidebarLinks}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: null
            },
            {
              label: "Logout",
              onClick: handleLogout
            }
          ],
          email: `oliver.smith@example.com`,
          imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
          name: `oliver smith`
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
