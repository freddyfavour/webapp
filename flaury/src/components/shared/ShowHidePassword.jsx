import React from "react";

const ShowHidePassword = ({ showPasswordToggle, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {showPasswordToggle ? (
        <>👁️</>
      ) : (
        <>🙈</>
      )}
    </button>
  );
};

export default ShowHidePassword;

export const ConfirmPassword = ({ confirmPasswordToggle, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {confirmPasswordToggle ? (
        <>👁️</>
      ) : (
        <>🙈</>
      )}
    </button>
  );
};

