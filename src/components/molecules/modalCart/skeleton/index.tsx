import React from "react";
import ContentLoader from "react-content-loader";


const CardProductCartSkeleton = () => {

    return (
        <div style={{width: 500, height: 120}}>
                <ContentLoader
                    speed={2}
                    style={{ width: '100%', height: 120, padding: 0 }}
                    backgroundColor="#cbcbd2"
                    foregroundColor="#645f6d"
                    viewBox="0 0 400 120"
                >
                    <rect x="0" y="0" rx="5" ry="5" width="390" height="100" />


                </ContentLoader>
        </div>
    )
};



export default CardProductCartSkeleton;
