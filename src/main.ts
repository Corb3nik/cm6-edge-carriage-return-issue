import { EditorView, lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { createContent } from "./content";

const app = document.getElementById("app");


window.editor = new EditorView({
  parent: app,
  doc: createContent(),
  extensions: [
    lineNumbers(),
    EditorView.theme({
      "&": {
        "max-height":"500px"
      },
      ".cm-scroller": {
        "overflow":"auto",
        "background-color": "grey"
      }
    }),

    EditorState.lineSeparator.of("\n"),
  ]
});


