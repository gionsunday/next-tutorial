// import { ServerOnly } from '@/lib/ServerOnly'
import axios from "axios"

export default async function ServerOnlyPage() {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')

    const onePostPerUser = [];
    const grouped = {};

    posts.data.forEach(post => {
        if (!grouped[post.userId]) {
            grouped[post.userId] = post; // take the first post only
            onePostPerUser.push(post);
        }
    })

    const fetchUser = async (userId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const {name} = response.data
        return name
    }

    // console.log(onePostPerUser)
    return (
        <div>

            <h1 className="text-2xl font-bold"> Users</h1>
            <ul>
                {onePostPerUser.map(post => (
                    <li key={post.id} className="border-b py-2">
                        <strong>Post Title:</strong> {post.title} <br />
                        post body: {post.body} <br />

                        <strong>Author:</strong>
                        {
                           fetchUser(post.userId) 
                        }
                    </li>
                ))}
            </ul>

        </div>
    )
}