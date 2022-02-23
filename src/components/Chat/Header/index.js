export default function Header() {
  return (
    <div className="flex flex-row py-3 px-4 bg-slate-100 border">
      <div className="flex flex-row">
        <div>
          <img
            className="rounded-full h-12"
            src="https://avatarbox.net/avatars/img25/silver_cat_avatar_picture_23625.jpg"
            alt="Profile"
          />
        </div>
        <div className="pl-4">
          <h1 className="font-medium text-base">Chat Name</h1>
          <p className="text-gray-500 text-sm">Chat Name</p>
        </div>
      </div>
      <div className="ml-auto my-auto">
        <button>
          <svg viewBox="0 0 24 24" width="24" height="24" class="">
            <path
              fill="currentColor"
              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
