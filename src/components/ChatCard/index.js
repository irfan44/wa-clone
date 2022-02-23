export default function ChatCard({ key, chat }) {
  console.log(chat);
  return (
    <div>
      <h1 className="font-medium">{chat.title}</h1>

      <p>{chat.last_message.sender_username}</p>{chat.last_message.text}
    </div>
  );
}
