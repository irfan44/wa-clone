import ChatUI from "../components/Chat";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Main() {
  return (
    <>
      <div className="h-screen flex flex-row">
        <div className="w-96">
          <Navbar />
          <SearchBar />
          <h1>Chat list</h1>
        </div>
        <div className="grow">
          <ChatUI />
        </div>
      </div>
    </>
  );
}
