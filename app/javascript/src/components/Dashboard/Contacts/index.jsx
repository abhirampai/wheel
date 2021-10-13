import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search, MenuHorizontal } from "neetoicons";
import {
  Button,
  Input,
  Avatar,
  PageLoader,
  Dropdown,
  Checkbox,
  Pagination,
  Typography
} from "neetoui/v2";
import { Header, Scrollable, Container } from "neetoui/v2/layouts";

import Alert from "components/Common/Alert";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  // const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Oliver Smith",
      role: "Owner",
      email: "oliversmith@example.com",
      createdAt: "Oct 14th, 2021"
    }
  ]);

  const deleteContact = indexVal => {
    setLoading(true);
    setContacts(prevContacts =>
      prevContacts.filter((_, index) => index !== indexVal)
    );
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
                    <table
                      className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
                    >
                      <thead>
                        <tr>
                          <th>
                            <Checkbox name="header" />
                          </th>
                          <th>{`${"Name & Role"}`}</th>
                          <th>Email</th>
                          <th>CreatedAt</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array(50)
                          .fill(contacts[0])
                          .map((contact, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td>
                                  <Checkbox name={index} />
                                </td>
                                <td>
                                  <div className="flex gap-x-2">
                                    <Avatar
                                      size={"large"}
                                      user={{ name: contact.name }}
                                    />
                                    <div className="flex flex-col mt-1">
                                      <Typography style="h5" weight="semi-bold">
                                        {contact.name}
                                      </Typography>
                                      <Typography style="body3" weight="light">
                                        {contact.role}
                                      </Typography>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <Typography style="body2" weight="light">
                                    {contact.email}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography style="body2" weight="light">
                                    {contact.createdAt}
                                  </Typography>
                                </td>
                                <td>
                                  <div className="flex flex-row items-center justify-end space-x-3">
                                    <Dropdown
                                      icon={MenuHorizontal}
                                      buttonStyle="icon"
                                      autoWidth
                                    >
                                      <li>Edit</li>
                                      <li onClick={() => setShowModal(true)}>
                                        Delete
                                      </li>
                                    </Dropdown>
                                  </div>
                                </td>
                              </tr>
                              <Alert
                                modalName={"Contact"}
                                showModal={showModal}
                                setShowModal={setShowModal}
                                deleteFunc={deleteContact}
                                id={index}
                              />
                            </React.Fragment>
                          ))}
                      </tbody>
                    </table>
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
              // primaryAction={() => setShowNewContactPane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Contacts;
