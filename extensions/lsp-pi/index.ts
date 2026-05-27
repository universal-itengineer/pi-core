import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import lspHookExtension from "./lsp.js";
import lspToolExtension from "./lsp-tool.js";

export default function (pi: ExtensionAPI) {
  lspHookExtension(pi);
  lspToolExtension(pi);
}
