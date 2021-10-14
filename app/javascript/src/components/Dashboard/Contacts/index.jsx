import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { Button, Input, PageLoader, Pagination, Toastr } from "neetoui/v2";
import { Header, Scrollable, Container } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { INITIAL_CONTACT_LIST } from "./constants";
import ContactTable from "./ContactTable";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(INITIAL_CONTACT_LIST);

  const deleteContact = indexVal => {
    setLoading(true);
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== indexVal)
    );
    Toastr.success("Contact deleted successfully");
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        <Menubar showMenu={showMenu} title={"Contacts"} />
        <Container>
          <Header
            title={
              <div className="flex items-center">
                <h3 className="text-2xl">Contacts</h3>
              </div>
            }
            menuBarHandle={
              <Button
                className="mr-2"
                icon={() => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#68737D"
                        strokeWidth="1.5"
                        d="M3 7.25L21 7.25"
                      ></path>
                      <path
                        stroke="#68737D"
                        strokeWidth="1.5"
                        d="M3 11.25L15 11.25"
                      ></path>
                      <path
                        stroke="#68737D"
                        strokeWidth="1.5"
                        d="M3 15.25L11 15.25"
                      ></path>
                    </svg>
                  );
                }}
                onClick={() => setShowMenu(prevState => !prevState)}
                style="text"
              />
            }
            actionBlock={
              <div className="flex justify-between mr-2 w-max">
                <Input
                  className="pr-2 w-96"
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search Name, Email, Phone Number"
                  size="large"
                  value={searchTerm}
                  prefix={<Search size={16} />}
                />
                <Button
                  className="mr-2 w-36"
                  label="Add Contact"
                  icon="ri-add-line"
                />
              </div>
            }
          />
          {contacts.length ? (
            <>
              <Scrollable className="w-full">
                {loading ? (
                  <PageLoader />
                ) : (
                  <>
                    <ContactTable
                      contacts={contacts}
                      deleteContact={deleteContact}
                    />
                  </>
                )}
              </Scrollable>
              <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
                <Pagination
                  count={300}
                  pageNo={1}
                  pageSize={25}
                  navigate={() => {}}
                />
              </div>
            </>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => null}
              primaryActionLabel="Add New Note"
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Contacts;
