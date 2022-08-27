import React from "react";
import ContentLoader from "react-content-loader";


const CardProductSkeleton = () => {

    return (
        <div style={{width: 250, height: 300}}>
                <ContentLoader
                    speed={2}
                    style={{ width: '100%', height: 300, padding: 0 }}
                    backgroundColor="#cbcbd2"
                    foregroundColor="#645f6d"
                    viewBox="0 0 200 300"
                >
                    <rect x="0" y="0" rx="5" ry="5" width="190" height="250" />


                </ContentLoader>
        </div>
    )
};



export default CardProductSkeleton;
