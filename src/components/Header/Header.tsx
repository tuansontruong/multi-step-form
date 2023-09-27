import { Fragment } from "react";

export function Header() {
  return (
    <Fragment>
      <div className="text-center">
        <h1 className="text-3xl font-black mb-3">
          Join our Community of Developers
        </h1>
        <h3 className=" text-gray">
          To join our community and participate in frontend challenges.
        </h3>
        <h3 className="text-gray">Please fill out the following form.</h3>
      </div>
    </Fragment>
  );
}
