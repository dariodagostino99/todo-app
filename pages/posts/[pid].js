import {useRouter} from 'next/router'

function Post({post}) {
    const router = useRouter();
    const {pid} = router.query

    return (
        <div>
            <h3>Post:{pid}</h3>
            <p> { post.title } </p>
            <footer>
                <a href={'/'}>Go back to Home</a>
            </footer>
        </div>
    )

}

export async function getStaticPaths() {
    const rest = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await rest.json();
    const paths = posts.map((post) => ({
        params: {pid: post.id.toString()}
    }))

    return {paths, fallback: false}

}

export async function getStaticProps({ params }) {
    const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.pid}`)
    const post = await rest.json()

    return { props: { post } }
}

export default Post;