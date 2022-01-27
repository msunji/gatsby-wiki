import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ChevronRight } from './ChevronRight';

const Category = ({ edges, fieldValue }) => {
  const [openCategory, setOpenCategory] = useState(false);
  console.log(openCategory);
  return (
    <div key={fieldValue} className="mb-1">
      <p
        className="cursor-pointer flex justify-between items-center py-1 px-2 font-semibold hover:bg-slate-300"
        onClick={() => setOpenCategory(!openCategory)}
      >
        <span>{fieldValue[0].toUpperCase() + fieldValue.slice(1)}</span>
        <span
          className={`transition-transform ${
            openCategory ? '-rotate-90' : 'rotate-90'
          }`}
        >
          <ChevronRight />
        </span>
      </p>
      <ul className={`pl-6 ${openCategory ? 'block' : 'hidden'}`}>
        {edges.map(({ node }) => (
          <li className="py-1" key={node.id}>
            <Link
              className="hover:text-slate-400"
              to={`/${node.childrenMdx[0].slug}`}
            >
              {node.childrenMdx[0].frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const data = useStaticQuery(graphql`
    query NotesQuery {
      allFile(filter: { sourceInstanceName: { eq: "notes" } }) {
        group(field: relativeDirectory) {
          edges {
            node {
              id
              childrenMdx {
                frontmatter {
                  title
                }
                slug
              }
            }
          }
          fieldValue
        }
      }
    }
  `);

  return (
    <nav className="h-full min-h-screen bg-slate-100 px-5 py-16 border-r border-solid border-slate-300 divide-y divide-solid divide-slate-300 text-slate-500">
      <div>
        <Link to="/" className="pl-2">
          About
        </Link>
      </div>
      <div>
        {data.allFile.group.map(({ edges, fieldValue }) => {
          return (
            <Category key={fieldValue} edges={edges} fieldValue={fieldValue} />
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
