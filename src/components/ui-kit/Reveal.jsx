import React from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  return (
    <Tag
      className={`animate-rise ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}