import Link from "next/link";
import { use } from "react";

async function getProjets(id) {
    let res = await fetch(`http://localhost:3001/projets`);
    return res.json()
}
const projetsP = getProjets()
export default function Layout({ params,children }) {
    console.log(params)
    let projets = use(projetsP)
    let projetsSelectionn√©es = projets.filter(p => p.slug === params.id)
    console.log(projetsSelectionn√©es)
    return (
        <div>
            <ul>
                {projetsSelectionn√©es.map(p => (
                    <li key={p.id}>
                        <Link href={`movies/${params.id}/projets/${p.id}`}>
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}