import React from "react";

import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";

import ChampionDashboardLayout from "../../components/layout/ChampiondashboardLayout";

const ChampionDashboard = () => {
  return <>projects home</>;
};

ChampionDashboard.getLayout = function getLayout(page) {
  return <ChampionDashboardLayout>{page}</ChampionDashboardLayout>;
};

export default ChampionDashboard;
