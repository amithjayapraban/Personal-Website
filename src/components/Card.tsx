import React from "react";

export default function Card({ children, p, w }: any) {
  return (
    <section
      className={`wrapper self-start   rounded-3xl ${p}  ${w}  border-2 border-b-8 border-fontcolor   flex  flex-col gap-2`}
    >
      {children}
    </section>
  );
}
