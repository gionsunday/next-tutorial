import { ServerOnly } from '@/lib/ServerOnly'

export default function ServerOnlyPage() {
   const content = ServerOnly()
    return (
        <div>
            <h1>Server Only Page</h1>
            <h1>{content}</h1>
            
        </div>
    )
}