import React from "react";
import { Link } from "react-router-dom";

const BackPath = ({ paths }) => {
  const path = paths?.split("/");
  return (
    <div className="py-3 bg-c-secondary">
      <div className="container">
        <div className="d-flex gap-3">
          <Link to="/" className={`text-decoration-none fw-semibold text-light-green`}>
            Home /
          </Link>
          {path?.map((val, index) => (
            <>
              {val && (
                <Link
                  key={index}
                  to={index < path?.length - 1&&val}
                  className={`text-decoration-none fw-semibold ${
                    index < path?.length - 1 && "text-green "
                  } text-capitalize text-white`}
                >
                  {val} {index < path?.length - 1 && "/"}
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackPath;
