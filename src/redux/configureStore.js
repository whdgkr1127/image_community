import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

export const history = createBrowserHistory();



const rootReducer = combineReducers({
    user: User,
    router:connectRouter(history),
  });//리듀서를 추가하려면 이쪽에 pst:Post 이런식으로 넣어주면 된다.


const middlewares = [thunk.withExtraArgument({history:history})];
//사용 할 미들웨어를 배열에 하나씩 넣는다.
//withExtraArgument는 thunk에 내장되어 있는것이며 다른 인수를 더 넘겨줄때 사용한다.

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");//require는 패키지를 가지고 올때 사용한다.
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //브라우저가 아닐때가 있는데 그럼 window객체를 사용 할 수 없기에 설정해두는것 뒤에는 devTools가 깔렸는지 물어보는 것
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    //지금까지 미들웨어를 사용한다고 설정하고 묶어주는 작업

    let store = (initialStore) => createStore(rootReducer, enhancer);
    //미들웨어와 리듀서를 엮어준다.

export default store();