import Loading from "components/Loading";
import Poster from "components/Poster";
import { useEffect, useState } from "react";
import { getPosterList } from "requests/poster/posterRequests";
import { PosterListType } from "types";

const PosterListPage = () => {
    const [posters, setPosters] = useState<PosterListType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosterList().then((data) => {
            setLoading(false)
            setPosters({ data })
        })
    }, [])

    if (loading) return <Loading />
    return (
        <div className="flex flex-wrap gap-5">
            {posters?.data.length ? posters!.data.map((poster) => {
                return <Poster key={poster.id} poster={poster} />
            }) : <h1>در حال حاظر هیچ آگهی ای ثبت نشده است</h1>}

        </div>
    );
}

export default PosterListPage;