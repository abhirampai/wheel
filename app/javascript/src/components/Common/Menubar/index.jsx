import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menubar = ({ showMenu, title }) => {
  return (
    <>
      <MenuBar
        showMenu={showMenu}
        title={
          <div className="flex justify-between">
            <Typography style="h2">{title}</Typography>
          </div>
        }
      >
        {title === "Notes" && (
          <>
            <MenuBar.Block label="All" count={200} active />
            <MenuBar.Block label="Users" count={80} />
            <MenuBar.Block label="Leads" count={60} />
            <MenuBar.Block label="Visitors" count={60} />
          </>
        )}
        {title === "Contacts" && (
          <>
            <MenuBar.Block label="All" count={0} active />
            <MenuBar.Block label="Archived" count={0} />
            <MenuBar.Block label="Completed" count={0} />
            <MenuBar.Block label="Phase 2" count={0} />
          </>
        )}

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        {title === "Notes" && (
          <>
            <MenuBar.Block label="Europe" count={80} />
            <MenuBar.Block label="Middle-East" count={60} />
            <MenuBar.Block label="Asia" count={60} />
            <MenuBar.AddNew label="Add New Segments" />
          </>
        )}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Settings size={20} />
            },
            {
              icon: () => <Plus size={20} />
            },
            {
              icon: () => <Search size={20} />
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        {title === "Notes" && (
          <>
            <MenuBar.Block label="Europe" count={80} />
            <MenuBar.Block label="Middle-East" count={60} />
            <MenuBar.Block label="Asia" count={60} />
            <MenuBar.AddNew label="Add New Tag" />
          </>
        )}
      </MenuBar>
    </>
  );
};

export default Menubar;
