import React from 'react'

export default function Card({children,p,w}:any) {
  return (
    <section className={`wrapper self-start bg-grey font-semibold rounded ${p}  ${w} h-full  flex  flex-col gap-2`}>
      {children}
    </section>
  );
}
