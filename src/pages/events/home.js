import React from "react";

const Home = React.memo(() =>
{
    return (
        <div className="flex justify-center items-center h-full">
            <div className="text-2xl">Welcome to Gwhoami</div>
        </div>
    );
});

export default Home;