import React from "react";

import { UserCircle, NeetoInsights, Keyboard } from "neetoicons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

// import AccountDropdown from "./AccountDropdown";
// import NavItem from "./NavItem";

const NavBar = () => {
  const { user } = useUserState();
  const contact = user
    ? { name: `${user.first_name} ${user.last_name}`, email: `${user.email}` }
    : null;
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
        isCollapsed={true}
        navLinks={[
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
        ]}
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
          email: `${contact.email}`,
          imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
          name: `${contact.name}`
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
