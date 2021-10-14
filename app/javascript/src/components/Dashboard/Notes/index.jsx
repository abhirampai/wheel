import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { PageLoader } from "neetoui";
import { Button, Input, Toastr } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { INITIAL_NOTES_LIST } from "./constants";
import NewNotePane from "./NewNotePane";
import NotesCard from "./NotesCard";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState(INITIAL_NOTES_LIST);

  const addNote = async values => {
    setLoading(true);
    const prevNotes = [...notes];
    values["id"] = prevNotes[prevNotes.length - 1].id + 1;
    setNotes([...prevNotes, values]);
    Toastr.success("Added Note Successfully");
    setLoading(false);
  };

  const deleteNote = id => {
    setNotes(prevState => prevState.filter(note => note.id != id));
    Toastr.success("Deleted Note Successfully");
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        <Menubar showMenu={showMenu} title={"Notes"} />
        <Container>
          <Header
            title={
              <div className="flex items-center">
                <h3 className="text-2xl">Notes</h3>
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
                  onClick={() => setShowNewNotePane(true)}
                  label="Add New Note"
                  icon="ri-add-line"
                />
              </div>
            }
          />
          {notes.length ? (
            <div className="w-full pl-2 pr-4 mt-4">
              {notes.map(item => (
                <NotesCard key={item.id} note={item} deleteNote={deleteNote} />
              ))}
            </div>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => setShowNewNotePane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewNotePane
            showPane={showNewNotePane}
            setShowPane={setShowNewNotePane}
            addNote={addNote}
          />
        </Container>
      </div>
    </>
  );
};

export default Notes;
