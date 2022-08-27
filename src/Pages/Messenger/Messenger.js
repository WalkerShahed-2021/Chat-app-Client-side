import React from "react";
import SearchSectionMessenger from "./SearchSectionMessenger/SearchSectionMessenger";

const Messenger = () => {
  return ( 
    <div className="bg-[#fff] h-auto">
      <div class="navbar container mx-auto">
        <div class="flex-1">
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <button class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people"/>
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                   Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="container mt-8 container mx-auto">
           <SearchSectionMessenger></SearchSectionMessenger>
        </div>
    </div>
  );
};

export default Messenger;
{
  /* <h1 className="text-2xl font-bold">Messages</h1>
  <div class="form-control">
    <input type="text" placeholder="Search" class="input input-bordered" />
  </div>
*/
}