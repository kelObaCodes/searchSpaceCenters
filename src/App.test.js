import {render} from '@testing-library/react'
import store from './redux/store';
import { Provider } from 'react-redux'
import SearchComponent from "./components/Search"
import List from "./components/List"


it('shows the name in search component', async () => {
  const {findByText} = render(
       <Provider store={store}>
           <SearchComponent />
       </Provider>
   );
  expect(await findByText('SPACE TRIPS')).toBeInTheDocument();
});

// it('shows the name list component', async () => {
//   const {findByText} = render(
//        <Provider store={store}>
//            <List />
//        </Provider>
//    );
//    render(<List />);
// });




