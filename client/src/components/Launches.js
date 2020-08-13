import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function SpaceLaunches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY );
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
    <Fragment>
      <h3 className="my-3">Launches</h3>
      <MissionKey />
       {
           data.launches.map(launch => (
               <LaunchItem key={launch.flight_number} launch={launch} />
           ))
       }
    </Fragment>
    );
  }

export default SpaceLaunches;
