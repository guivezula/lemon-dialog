import React, { useState } from "react";
import Dialog from "../Dialog";
import { AppBody, Button } from "./style/App.styled";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <AppBody>
      <Button onClick={() => setOpenDialog(true)}>Abrir Dialog</Button>
      <Dialog
        title="Title"
        isOpen={openDialog}
        closeOnOverlayClick={true}
        onClose={() => setOpenDialog(false)}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </Dialog>
    </AppBody>
  );
}

export default App;
