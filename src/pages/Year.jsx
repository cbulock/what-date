import { Page, PageContent, Heading } from "grommet";
import { DateTime } from "luxon";

const now = DateTime.now();
const displayDate = now.toLocaleString({ year: "numeric" });

const Index = () => (
  <Page>
    <PageContent>
      <Heading>{displayDate}</Heading>
    </PageContent>
  </Page>
);

export default Index;
