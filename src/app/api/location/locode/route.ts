// import{ sql } from "@/network/db/connection";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//     try {
//       console.log(request)
//       let name:any = await request.nextUrl.searchParams
//       let id:any = await request.nextUrl.searchParams
//       let str:string = name?.get("name")?name?.get("name") :""
//       let query = "";
//       if(name.get("name")){
//         query = "";
//       }
//       if(name.get("id")){
//         query = "SELECT DISTINCT `t1`.`id`, `t1`.`Country`, `t1`.`Name`,`t1`.`Location`,`t1`.`Subdivision`,`t2`.`emoji`,`t2`.`currency`, `t2`.`name` AS `countryname`,`t3`.`name` AS `statename`, `t1`.`FullName` FROM `locode` AS `t1` INNER JOIN `countries` AS `t2` ON `t2`.`iso2` = `t1`.`Country` LEFT JOIN `states` AS `t3` ON `t3`.`iso2` = `t1`.`Subdivision` WHERE `t1`.`id` = "+id.get("id");
//       }
//       const res = await sql`
// select distinct
//   t1.id,
//   t1."Country",
//   t1."Name",
//   t1."Location",
//   t1."Subdivision",
//   t2.emoji,
//   t2.currency,
//   t2.name as countryname,
//   COALESCE(MAX(t3.name), '') AS statename,
//   t1."FullName",
//   CONCAT(
//     t1."Location",
//     ' ',
//     SPLIT_PART(t1."Name", ' ', 1), -- Extract the first word from the "Name" column
//     ' ',
//     t2.name
//   ) AS formatted_port
// from
//   locode as t1
//   inner join countries as t2 on t2.iso2 = t1."Country"
//   left join states as t3 on t3.iso2 = t1."Subdivision"
// where
//   t1."Location" ilike ${"%" + str + "%"}
//   or t1."Country" ilike ${"%" + str + "%"}
//   or t1."Name" ilike ${"%" + str + "%"}
//   or t1."FullName" ilike ${"%" + str + "%"}
// group by
//   t1.id,
//   t1."Country",
//   t1."Name",
//   t1."Location",
//   t1."Subdivision",
//   t2.emoji,
//   t2.currency,
//   t2.name,
//   t1."FullName"
// limit
//   50;`
//       return NextResponse.json({code:true, data:res});
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({code:false, error: 'Database error' });
//     }
//   }

// import { sql } from "@/network/db/connection";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   try {
//     // Extract search parameters
//     const searchParams = request.nextUrl.searchParams;
//     const name = searchParams.get("name") || ""; // Get the 'name' query parameter

//     if (!name) {
//       return NextResponse.json({ code: false, error: "No search term provided" });
//     }

//     // Execute the query with parameterized input
//     const res = await sql`
//       SELECT DISTINCT
//         t1.sea_port_code,
//         t1.port_name,
//         t1.country
//       FROM
//         locode_sea AS t1
//       WHERE
//         t1.sea_port_code ILIKE ${'%' + name + '%'}
//         OR t1.port_name ILIKE ${'%' + name + '%'}
//         OR t1.country ILIKE ${'%' + name + '%'}
//       LIMIT 50
//     `;

//     return NextResponse.json({ code: true, data: res });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ code: false, error: "Database error" });
//   }
// }

import { sql } from "@/network/db/connection";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Debug: Log all search parameters
    console.log("Query Params:", request.nextUrl.searchParams.toString());

    // Extract search parameters
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name") || "";
    const modeOfShipment = searchParams.get("modeOfShipment") || "";

    console.log("Name:", name);
    console.log("Mode of Shipment:", modeOfShipment);

    if (!name) {
      return NextResponse.json({ code: false, error: "No search term provided" });
    }

    let query;
    
    if (modeOfShipment.toLowerCase() === "sea-fcl" || modeOfShipment.toLowerCase() === "sea-lcl") {
      query = sql`
        SELECT DISTINCT
          t1.sea_port_code,
          t1.port_name,
          t1.country
        FROM
          locode_sea AS t1
        WHERE
          t1.sea_port_code ILIKE ${'%' + name + '%'}
          OR t1.port_name ILIKE ${'%' + name + '%'}
          OR t1.country ILIKE ${'%' + name + '%'}
        LIMIT 50
      `;
    } else if (modeOfShipment.toLowerCase() === "air") {
      query = sql`
        SELECT DISTINCT
          t1.iata_code,
          t1.airport_name,
          t1.city,
          t1.country
        FROM
          locode_air AS t1
        WHERE
          t1.iata_code ILIKE ${'%' + name + '%'}
          OR t1.airport_name ILIKE ${'%' + name + '%'}
          OR t1.city ILIKE ${'%' + name + '%'}
          OR t1.country ILIKE ${'%' + name + '%'}
        LIMIT 50
      `;
    } else {
      return NextResponse.json({ code: false, error: "Invalid modeOfShipment" });
    }

    // Execute the selected query
    const res = await query;

    return NextResponse.json({ code: true, data: res });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ code: false, error: "Database error" });
  }
}
