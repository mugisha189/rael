import MainAppLayout from "@/components/layouts/MainAppLayout";
import React from "react";
import ChronoTimeline from "./chrono-timeline";

const TimelinePage = () => {
  return (
    <MainAppLayout>
      {/* <MantineTimeline /> */}
      {<ChronoTimeline />}
    </MainAppLayout>
  );
};

export default TimelinePage;