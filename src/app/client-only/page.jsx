"use client"

import { ServerOnly } from '@/lib/ServerOnly'

export default function ClientOnlyPage() {
    const content = ServerOnly()
    return (
        <div>
            <h1>Client Only Page</h1>
            <h1>{content}</h1>
        </div>
    )
}