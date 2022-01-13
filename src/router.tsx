import {Redirect, Route,RouteProps,BrowserRouter as Router,Switch} from "react-router-dom";
import React,{ FC, memo } from "react";
import Layout from 'components/Layout';

import Login from 'pages/Login';
import Home from 'pages/Home';
import Error from 'pages/Error';
import Base from 'pages/Base';
interface IRouteProps extends RouteProps{
    path:string,
    name:string,
    component:any,
}

const routes: IRouteProps[] = [
    { path: '/home',name:"首页", component: Home, exact: true },
    { path: '/base',name:"基础配置",component: Base, exact: true },
];

const RouterConfig: FC = ()=>(
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Layout menu={routes}>
            <Switch>
                 <Redirect to='/home' exact from='/' />
                    {
                        routes.map((item,index)=>
                            <Route
                              key={index}
                              path={item.path}
                              component={item.component}
                              exact={item.exact}
                            />
                        )
                    }
                <Route path="/*" component={Error} />
            </Switch>
            </Layout>
        </Switch>
    </Router>
)
export default memo(RouterConfig)


