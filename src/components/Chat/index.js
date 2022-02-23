import Footer from "./Footer";
import Header from "./Header";

export default function ChatUI() {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className="grow">
        <h1>Chat</h1>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
