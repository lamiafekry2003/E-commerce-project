// import React from "react";
// import { Helmet } from "react-helmet";
// import { useGetGat, getAllGategory } from "../useGategory";
// import { Link } from "react-router-dom";
// import Loading from "../Loading";
// export default function Gategories() {
//   let { data, isLoading, isError, error } = useGetGat("getGat", getAllGategory);
//   console.log(data);
//   if (isLoading) return <Loading></Loading>;

//   if (isError) return <h2 className="text-center">{error.message}</h2>;

//   return (
//     <div className="container">
//       <Helmet>
//         <title>Gategory</title>
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       <div className="row">
//         {data?.data?.data.map((gat) => <div className="col-md-3 my-3 align-items-center">
//         <Link to={`/gategories/${gat?._id}`}>
//             <div className="product  cursor-pointer mt-5 p-3">
//               <img src={gat?.image} className="w-100" height={350} alt={gat?.name} />
//               <h2 className="h5 text-main my-3 text-center ">{gat?.name}</h2>
//             </div>
//           </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Helmet } from "react-helmet";
import { useGetGat, getAllGategory } from "../useGategory";
import { Link } from "react-router-dom";
import Loading from "../Loading";

export default function Gategories() {
  let { data, isLoading, isError, error } = useGetGat("getGat", getAllGategory);
  console.log(data);
  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2 className="text-center">{error.message}</h2>;

  return (
    <div className="container mt-4">
      <Helmet>
        <title>Gategory</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="row">
        {data?.data?.data.map((gat) => (
          <div className="col-6 col-md-3 my-3 align-items-center" key={gat._id}>
            <Link to={`/gategories/${gat?._id}`}>
              <div className="product cursor-pointer mt-5 p-3">
                <img src={gat?.image} className="w-100 gategories-img" height={350} alt={gat?.name} />
                <h2 className="h5 text-main my-3 text-center gategories-name">{gat?.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}