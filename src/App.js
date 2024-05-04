import React, {Fragment, useEffect, useState} from 'react';

import Tasks from './componentsCostumHooksHttp/Tasks/Tasks'
import NewTask from './componentsCostumHooksHttp/NewTask/NewTask';
import Counter from "./components3/Counter";
import Auth from "./components3/Auth";
import Header from "./components3/Header";
import {useDispatch, useSelector} from "react-redux";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [tasks, setTasks] = useState([]);
//
//   const fetchTasks = async (taskText) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/tasks.json'
//       );
//
//       if (!response.ok) {
//         throw new Error('Request failed!');
//       }
//
//       const data = await response.json();
//
//       const loadedTasks = [];
//
//       for (const taskKey in data) {
//         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//       }
//
//       setTasks(loadedTasks);
//     } catch (err) {
//       setError(err.message || 'Something went wrong!');
//     }
//     setIsLoading(false);
//   };
//
//   useEffect(() => {
//     fetchTasks();
//   }, []);
//
//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }
//
// export default App;





// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
//
//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);
//
//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };
//
//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };
//
//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }
//
// export default App;


// const App = () => {
//     return (
//         <Layout>
//             <Switch>
//                 <Route path={'/'} exact={true}>
//                     <Redirect to={'/quotes'}/>
//                 </Route>
//                 <Route path={'/quotes'} exact>
//                     <AllQuotes/>
//                 </Route>
//                 <Route path={'/quotes/:quoteId'}>
//                     <QuoteDetail/>
//                 </Route>
//                 <Route path={'/new-quote'}>
//                     <NewQuote/>
//                 </Route>
//                 <Route path={'*'}>
//                     <NotFound/>
//                 </Route>
//             </Switch>
//         </Layout>
//     )
// }

const App = () => {
    const authStatus = useSelector(state=> state.auth.isAuthenticated)


    return(
        <Fragment>
            <Header/>
            {!authStatus && <Auth/>}
            <Counter/>
        </Fragment>
    )
}

export default App;