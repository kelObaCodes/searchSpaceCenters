import React from "react";

import { useQuery, gql } from "@apollo/client";


const GET_SPACE_CENTERS = gql`
query {
  spaceCenters(page:1, pageSize:1538){
    pagination {
total
page
pageSize
}
    nodes{
      id
      uid
      name
      description
      latitude
      longitude
      planet{
        name
      }
    
    }
  }
}
`;

export const useGetspaceCenters = () => {
  
const {error, data, loading} = useQuery(GET_SPACE_CENTERS)

React.useEffect(() => {
    console.log(data)

}, [])

  return {
      error, data, loading
  }
}
