import "./App.css";
import { EmbeddedChat } from "./EmbeddedChat";
import { ChatButtonSSR } from "./ChatButtonSSR";
import { SearchBar } from "./SearchBar";
import { CustomTrigger } from "./CustomTrigger";

function App() {
  return (
    <div className="ikp-components-wrapper">
      <div className="ikp-header-wrapper">
        <SearchBar />
        <CustomTrigger />
      </div>
      <EmbeddedChat />
      <ChatButtonSSR />
    </div>
  );
}

export default App;
