import React from 'react'

const Section = ({title, id, className, body}) => {
  return (
    <section id={id} className={className}>
        <h2>{title}</h2>
        {body}
    </section>
  )
}

export default Section