import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto  p-5 ">
      <div className="gap-2 grid md:grid-cols-5 grid-cols-2">
        <div className="flex flex-col gap-1 mb-2 text-[1rem] ">
          <h1 className="font-medium">Open Library</h1>
          {[
            "Vision",
            "Volunteer",
            "Partner With us",
            "Careers",
            "Blog",
            "Terms of Service",
            "Donate",
          ].map((l) => (
            <a key={l} className="underline text-[#02598b]" href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-2 text-[1rem] ">
          <h1 className="font-medium">Discover</h1>
          {[
            "Home",
            "Books",
            "Authors",
            "Subjects",
            "Collections",
            "Advanced Search",
            "Return to Top,",
          ].map((l) => (
            <a key={l} className="underline text-[#02598b]" href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-2 text-[1rem] ">
          <h1 className="font-medium">Develop</h1>
          {[
            "Developer Center",
            "API Documentation",
            "Bulk Data Dumps",
            "Writing Bots",
            "Add a Book",
          ].map((l) => (
            <a key={l} className="underline text-[#02598b]" href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-1 mb-2 text-[1rem] ">
          <h1 className="font-medium">Help</h1>
          {["Help Center", "Report A Problem", "Suggesting Edits"].map((l) => (
            <a key={l} className="underline text-[#02598b]" href="#">
              {l}
            </a>
          ))}
          <div className="flex gap-3 mt-3">
            <a className="bg-gray-700 p-1 inline-block rounded-md" href="#">
              <img
                className="w-6"
                src="https://openlibrary.org/static/images/tweet.svg"
                alt=""
              />
            </a>
            <a className="bg-gray-700 p-1 inline-block rounded-md" href="#">
              <img
                className="w-6"
                src="https://openlibrary.org/static/images/github.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-2 text-[1rem] ">
          <h1 className="font-medium">Change Website Language</h1>
          {[
            "Čeština (cs)",
            "Deutsch (de)",
            "English (en)",
            "Español (es)",
            "Français (fr)",
            "Hrvatski (hr)",
            "Português (pt)",
            "తెలుగు (te)",
            "Українська (uk)",
            "中文 (zh)",
          ].map((l) => (
            <a key={l} className="underline text-[#02598b]" href="#">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="py-3 border-t border-gray-500 flex items-center gap-3 mt-5">
        <img
          className="w-6"
          src="https://openlibrary.org/static/images/pantheon.png"
          alt=""
        />
        <p className="text-[0.8em]">
          Open Library is an initiative of the{" "}
          <span className="underline text-[#02598b]">Internet Archive</span>, a
          501(c)(3) non-profit, building a digital library of Internet sites and
          other cultural artifacts in digital form. Other{" "}
          <span className="underline text-[#02598b]">projects</span> include the
          Wayback Machine,{" "}
          <span className="underline text-[#02598b]">archive.org</span> and
          <span className="underline text-[#02598b]">archive-it.org</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
