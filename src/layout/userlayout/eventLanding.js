import { Suspense } from "react";
import { lazy } from "react";
import { useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Route, Switch } from "react-router-dom";
import DotSpinner from "../../DotSpinner";
import { UserContext } from "../../util/maincontext";
import SideBar from "./sidebar/sideBar";
import TopHeader from "./topHeader";

const userPagePath = [
    {
        path: '/home',
        component: lazy(() => import('../../pages/events/home')),
        exact: true
    }

];

const EventLanding = () =>
{
    const scrollRef = useRef();
    return (
        <UserContext.Provider value={{ scrollRef }}>
            <div>
                <SideBar />
                <section className="home-section bg-gray-50">
                    <TopHeader />
                    <Scrollbars ref={scrollRef} autoHide className="px-4 overflow-auto" style={{ height: "calc(100% - 72px)" }}>
                        <Switch>
                            <Suspense fallback={<div className="w-full h-full justify-center items-center bg-bgback"><DotSpinner /></div>}>
                                {userPagePath.map(({ component: Component, path, exact }) => (
                                    <Route
                                        path={`/shopping${path}`}
                                        key={path}
                                        exact={exact}
                                    >
                                        <Component />
                                    </Route>
                                ))}
                            </Suspense>
                        </Switch>
                    </Scrollbars>
                </section>
            </div>
        </UserContext.Provider>
    );
}

export default EventLanding;