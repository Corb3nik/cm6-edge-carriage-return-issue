import { EditorView } from "@codemirror/view";
import { createContent } from "./content";

const app = document.getElementById("app");


window.editor = new EditorView({
  parent: app,
  doc: createContent(),
  extensions: [
    EditorView.theme({
      "&": {
        "max-height":"500px"
      },
      ".cm-scroller": {
        "overflow":"auto",
        "background-color": "grey"
      }
    }),
    EditorView.lineWrapping
  ]
});


