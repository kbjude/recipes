import React from 'react';

const Detail = props => {
    const { match } = props;
    const { detail } = useselector(state => state);
    const dispatch = useDispatch();
    
    const getID = () => {
        dispatch(fetchDetail()); 
    };

    useEffect(() => {
        getID();
        dispatch(fetchDetail());
    }, []);

    return (
        <>
            <Display
            key={detail.detail[0].id}
            id={detail.detail[0].id}
            name={detail.detail[0].name}
            description={detail.detail[0].description}
            image={detail.detail[0].thumbnail.path}
            url={ServiceUIFrameContext.urls[0].url}
            />
        </>
        
    )
}