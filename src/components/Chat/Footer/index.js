export default function Footer() {
  return (
    <div className="bg-slate-100 flex flex-row px-2 py-3">
      <div className="grow">
        <input
          type="text"
          id="email-adress-icon"
          className="text-gray-900 text-sm rounded-lg block w-full pl-14 p-2.5"
          placeholder="Type a message"
        />
      </div>
      <div className="p-2">
        <svg viewBox="0 0 24 24" width="24" height="24" class="">
          <path
            fill="currentColor"
            d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
