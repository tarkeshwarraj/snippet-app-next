const BlogLayout = ({ children }) => {
    return children;
};

export default BlogLayout;

export async function generateMetadata({ params }) {
    const title = params?.post ? params.post.split('-').join(" ") : "Default Title";

    return {
        title,
    };
}
