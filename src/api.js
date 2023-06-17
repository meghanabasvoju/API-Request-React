import axios from 'axios';

const searchImages = async(term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID CAVyOV95mzqRvogVkM-TQ9DUrPnfhdlzSOwGit78GFM'
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
};

export default searchImages;
