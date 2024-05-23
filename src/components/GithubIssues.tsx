import {useEffect, useState} from 'react'
interface Props {
    repo: string
}
export default function Issues({repo}: Props) {
    const [issues, setIssues] = useState<any[] | null>(null)
    useEffect(() => {
        const url = `https://api.github.com/repos/${repo}/issues?state=open`
        fetch(url).then(response => response.json()).then(setIssues)
    }, [])

    if (!issues) return <div>Loading...</div>
    return (
        <table>
            {issues.map(issue => (
                <tr key={issue.url}>
                    <td>{issue.number}</td>
                    <td>
                        <a href={issue.html_url}>{issue.title}</a>
                    </td>
                </tr>
            ))}
        </table>
    )
}
