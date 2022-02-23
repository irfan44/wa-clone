export default function SearchBar() {
  return (
    <div className="p-2">
      <div className="relative mt-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg viewBox="0 0 24 24" width="24" height="24" class="">
            <path
              fill="currentColor"
              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-adress-icon"
          className="bg-slate-100 text-gray-900 text-sm rounded-lg block w-full pl-14 p-2.5"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
}
