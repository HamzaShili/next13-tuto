export default function Page({params}){
    console.log(params)
    return(
        <p>Projet {params.projetId}</p>
    )
}