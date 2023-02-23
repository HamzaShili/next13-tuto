'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";

async function getMovie(id) {
    let res = await fetch(`http://localhost:3001/movies/${id}`);
    return res.json()
}

export default function Layout({ params,children }) {
    let movie = use(getMovie(params.id))
    let router = useRouter()
    return (
        <div>
            <p>
                <Link href={`movies/${params.id}/projets`}
                >
                    {movie.id}
                </Link>
            </p>
            <p className="text-3xl">{movie.title}</p>
            <p className="mt-2">{movie.year}</p>
            <p className="mt-2">{movie.description}</p>
            <div>
                {children}
            </div>

        </div>
    )
}