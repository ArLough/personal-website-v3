import React from 'react'
import Link from 'next/link';

export default function Project(props) {
  return (
    <div id={"project-" + props.info.id} className="flex flex-col justify-between flex-grow px-8 py-8 space-y-8 border shadow-2xl rounded-3xl bg-primary">
    <div className="flex flex-row space-x-8 ">
    <h3 className="self-center text-2xl font-bold text-white self-left md:text-4xl">
        {props.info.name}
    </h3>
    <div className="self-center">
    {props.info.src_link.length > 1 ? 
          <a  href={props.info.src_link}>
          <svg className="self-center transition duration-300 fill-white hover:fill-hover" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          :
          <a href={"mailto:loughneyaidan@gmail.com?subject=Requesting " + props.info.name + " source code"}>
          <svg className="self-center transition duration-300 fill-white hover:fill-hover" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          </a>
        }
          </div>
    </div>
    <div className="flex flex-col flex-grow space-y-5 text-white text-l md:text-2xl">
      <div>{props.info.summary}</div>
      <div><b>Skills</b>: {props.info.skills.join(', ')}</div>
      
          </div>
    <div className="flex self-center my-auto space-x-8 text-black h-1/4">
          <Link className="self-end px-1 py-1 text-lg transition duration-300 bg-white rounded-lg hover:bg-hover" href="/projects" >
          See More
          </Link>
        
    </div>
</div>
  )
}
