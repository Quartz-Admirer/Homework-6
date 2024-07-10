import React from 'react';
import axios from 'axios';
import ComicPage from '../../components/ComicPage';

type Comic = {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
};

type ComicPageProps = {
    comic: Comic;
};

const Comic: React.FC<ComicPageProps> = async () => {
    const email = 'o.shchendrigin@innopolis.university';
    const emailParam = new URLSearchParams({ email });
    const comicIdResponse = await axios.get(
        `https://fwd.innopolis.university/api/hw2?email=${emailParam}`
    );
    const comicId = comicIdResponse.data;

    const comicResponse = await axios.get(
        `https://fwd.innopolis.university/api/comic?id=${comicId}`
    );
    const comicData = comicResponse.data;

    return <ComicPage comic={comicData} />;
};

export default Comic;
