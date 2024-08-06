import "./App.css";
import { EmbeddedChat } from "./EmbeddedChat";
import { ChatButtonSSR } from "./ChatButtonSSR";

function App() {
  return (
    <>
      <EmbeddedChat />
      <ChatButtonSSR />
    </>
  );
}

export default App;
