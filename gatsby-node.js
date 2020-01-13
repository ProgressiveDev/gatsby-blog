const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md");

        createNodeField({
            node,
            name: "slug",
            value: slug
        });
    };

};

module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve("./src/templates/blog.tsx");
    const response = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    response.data.allMarkdownRemark.edges.forEach(element => {
        createPage({
            component: blogTemplate,
            path: "/blog/" + element.node.fields.slug,
            context: {
                slug: element.node.fields.slug
            }
        })
    });
}