import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Sidebar = () => {
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
    <nav className="h-screen bg-slate-100 px-5 py-16 border-r border-solid border-slate-300 divide-y divide-solid divide-slate-300 text-slate-500">
      <div>About</div>
      <div className="py-2">
        {data.allFile.group.map(({ edges, fieldValue }) => {
          return (
            <div key={fieldValue}>
              <p>{fieldValue[0].toUpperCase() + fieldValue.slice(1)}</p>
              <ul>
                {edges.map(({ node }) => (
                  <li key={node.id}>
                    <Link to={`/${node.childrenMdx[0].slug}`}>
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
