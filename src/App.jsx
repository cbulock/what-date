import { DateTime } from "luxon";

const now = DateTime.now();
const displayDate = now.toLocaleString(DateTime.DATE_FULL);

const App = () => <h1>{displayDate}</h1>;

export default App;
