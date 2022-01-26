import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ChevronRight } from './ChevronRight';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
            <div key={fieldValue} className="mb-1">
              <p className="flex justify-between py-1 pl-2 font-semibold hover:bg-slate-300">
                <span>{fieldValue[0].toUpperCase() + fieldValue.slice(1)}</span>
                <ChevronRight className="text-sm" />
              </p>
              <ul className="pl-6">
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
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
