import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ChevronRight from './ChevronRight';
import Cross from './Cross';

const MobileNav = ({ handleOpen }) => {
  return (
    <div className="py-5 px-6 flex md:hidden justify-end w-full border-b border-slate-200 fixed  backdrop-blur-sm bg-white/30">
      <button className="space-y-1.5 md:hidden" onClick={handleOpen}>
        <div className="block w-7 h-0.5 bg-slate-600" />
        <div className="block w-7 h-0.5 bg-slate-600" />
      </button>
    </div>
  );
};

const Category = ({ edges, fieldValue }) => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div key={fieldValue} className="mb-1">
      <p
        className="cursor-pointer rounded flex justify-between items-center py-1 px-2 hover:bg-slate-300"
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

  const handleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

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
    <div>
      <MobileNav isOpen={openDrawer} handleOpen={handleOpen} />
      <nav
        className={`fixed z-20 min-h-full h-full h-screen w-80 bg-slate-100 px-6 text-slate-500 overflow-y-auto md:translate-x-0 md:static transition-transform ${
          openDrawer ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-8 md:text-m">
          <div className="w-full flex justify-end">
            <button
              className="space-y-1.5 md:hidden"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Cross />
            </button>
          </div>

          <div className="py-1 px-2 border-b border-slate-300 mb-2">
            <Link to="/">About</Link>
          </div>
          <div>
            {data.allFile.group.map(({ edges, fieldValue }) => {
              return (
                <Category
                  key={fieldValue}
                  edges={edges}
                  fieldValue={fieldValue}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
