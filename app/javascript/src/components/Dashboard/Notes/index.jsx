import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { PageLoader } from "neetoui";
import { Button, Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import NewNotePane from "./NewNotePane";
import NotesCard from "./NotesCard";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "How to claim the warranty?",
      content: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
      tag: "Getting Started"
    },
    {
      id: 2,
      title: "How to claim the warranty?",
      content: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
      tag: "Getting Started"
    },
    {
      id: 3,
      title: "How to claim the warranty?",
      content: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
      tag: "Getting Started"
    }
  ]);

  const deleteNote = id => {
    setNotes(prevState => prevState.filter(note => note.id != id));
  };

  useEffect(() => {
    //fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        <Menubar showMenu={showMenu} title={"Notes"} />
        <div className="w-full flex-shrink">
          <Header
            title={
              <div className="flex items-center">
                <h3 className="text-2xl">Notes</h3>
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
                  onClick={() => setShowNewNotePane(true)}
                  label="Add New Note"
                  icon="ri-add-line"
                />
              </div>
            }
          />
          {notes.length ? (
            <div className="w-full mt-4 pr-4 pl-2">
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
            fetchNotes={fetchNotes}
          />
        </div>
      </div>
    </>
  );
};

export default Notes;
