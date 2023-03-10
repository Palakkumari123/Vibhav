import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="p-4 pb-4 text-white  footer footer-center bg-base-300 text-base-content">
        <div>
          <p className="flex items-center justify-center text-xl">
            Made with ❤️ by
            <Link
              href="/team"
              className="text-2xl text-red-400 cursor-pointer "
            >
              {" "}
              Team Vibhav{" "}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
