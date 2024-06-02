import { useEffect } from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

import customize from "../handlers/customChatengine";

function ChatEgine(props) {
  useEffect(customize);

  const chatProps = useMultiChatLogic(
    "142748e3-226c-40fc-91f3-ffa355d535a7",
    props.user,
    "@@@###$$$"
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100%", marginLeft: "74px" }}
      />
    </div>
  );
}

export default ChatEgine;
