// This is a function to delete the existing note. A note.id will be passed as argument and it will send a POST request to the end point "/delete-note" defined ... and when it gets a response from that end point it will reload the page using the command in line8
function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }