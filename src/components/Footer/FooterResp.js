import React, { useEffect, useState } from "react";

function FooterResp({ title, items }) {
  const [size, setSize] = useState(true);
  const [open, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setSize(true);
      setOpen(true);
    } else {
      setSize(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="header" onClick={() => setOpen(!open)}>
        {title}
        <span>+</span>
      </div>

      {(size || open) && (
        <>
          {items.map((item) => (
            <li className="listItem">{item}</li>
          ))}
        </>
      )}
    </>
  );
}

export default FooterResp;
