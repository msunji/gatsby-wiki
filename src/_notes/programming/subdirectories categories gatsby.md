---
title: Subdirectories as Categories with GraphQL and Gatsby
datePosted: 2022-02-09
dateUpdated: 2022-02-10
---

![Hand drawn draft of file structure](../../images/note-img/subdirectory-category-draft.jpg)

I wanted the notes in my sidebar to be structured the same way I organised the Markdown files themselves (see image above). Pretty straightforward.

## Shaping your data with GraphQL

I used a `useStaticQuery` hook to pull data into the `Sidebar` component.

Now on to the query itself.

I needed my data to be shaped in such a way that I could iterate through the subdirectories (or categories) in the `notes` directory, and then iterate through the files in each subdirectory. With GraphQL, you can do something like this:

```graphql
{
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
```

Breaking it down:

- Run a query to look through the project's file system (`allFiles`)
- `filter: { sourceInstanceName: { eq: "notes" } }` ensures that we're only looking at files in the `notes` directory.
- `group(field: relativeDirectory)` groups files based on the subdirectory they're in. So files in the `baking` subdirectory get grouped together and so on.
- To get the category names from the subdirectories, I included `fieldValue` in my query.
- From the file `node` object, get the id, as well as the note title and slug.

The query's output gets returned as JSON and looks a bit like this:

```json
{
  "data": {
    "allFile": {
      "group": [
        {
          "edges": [
            {
              "node": {
                "id": "f5a150e8-bb20-5457-8a1b-0fa2e7369109",
                "childrenMdx": [
                  {
                    "frontmatter": {
                      "title": "Apple Pie"
                    },
                    "slug": "baking/apple-pie"
                  }
                ]
              }
            },
            {
              // other baking-related notes
            }
          ],
          "fieldValue": "baking"
        },
        {
          "edges": [
            {
              // programming notes
            }
          ],
          "fieldValue": "programming"
        }
      ]
    }
  }
}
```

From here, I mapped through the `group` array, then mapped through each `edges` array to get the file nodes with the info I needed.

## Resources

- [Sourcing from the File System](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-the-filesystem/)
- [GraphQL Query Options](https://www.gatsbyjs.com/docs/graphql-reference/)
