import React from 'react';
import { useEffect, useState } from 'react';

export default function useSanity(keyword) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const query = `*[ _type == "${keyword}" ]`;
        const encodedQuery = encodeURIComponent(query)
        const id = 'njp2igeq'
        const url = `https://${id}.api.sanity.io/v2021-06-07/data/query/production?query=${encodedQuery}`

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
    }, [keyword]);

    return data;
}
