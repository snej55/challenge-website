import React, { Suspense } from 'react';

const DynamicComponent = ({ path, ...props }) => {
    const Component = React.lazy(() => import(`${__dirname}/${path}`));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
};

export default DynamicComponent;