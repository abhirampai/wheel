import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { Button, Input, PageLoader, Pagination, Toastr } from "neetoui";
import { Header, Scrollable, Container } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { INITIAL_CONTACT_LIST } from "./constants";
import ContactTable from "./ContactTable";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
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

  const addContact = async values => {
    setLoading(true);
    const prevContacts = [...contacts];
    values["id"] = prevContacts[prevContacts.length - 1].id + 1;
    values["createdAt"] = "Oct 14th, 2021";
    setContacts([...prevContacts, values]);
    Toastr.success("Added Contact Successfully");
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
            menuBarToggle={() => setShowMenu(prevState => !prevState)}
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
                  onClick={() => setShowNewContactPane(true)}
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
              primaryAction={() => setShowNewContactPane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewContactPane
            showPane={showNewContactPane}
            setShowPane={setShowNewContactPane}
            addNote={addContact}
          />
        </Container>
      </div>
    </>
  );
};

export default Contacts;
