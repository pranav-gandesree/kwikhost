'use client';

import React from 'react';

const NotionUpload = () => {
  return (
    <pre className="text-white flex justify-center">
      <iframe src="https://brash-currant-b80.notion.site/ebd/1b9bc4381f94805f81ffcd50056f387c" width="70%" 
      height="600" 
      
      />
    </pre>
  );
};

export default NotionUpload;



// import { Client } from '@notionhq/client'
// import React from 'react'

// const fetchPage = async () => {
//   const notion = new Client({
//     auth: process.env.NOTION_API_KEY
//   })

//   const page = await notion.pages.retrieve({
//     // page_id: "1b9bc438-1f94-805f-81ff-cd50056f387c"
//     page_id: "1b9bc4381f94805f81ffcd50056f387c"
//   }) 

//   const blocks = await notion.blocks.children.list({
//     block_id: "1b9bc4381f94805f81ffcd50056f387c"
//   })


//   const title = page.properties.title.title[0].plain_text;


//   return {title, blocks}
// }

// const NotionUpload = async () => {
//   const page = await fetchPage()

//   return (
//     <>
//       <div>
//         Notion page content workign gio
//       </div>

//       <div>title is {page.title}</div>

//       {/* <pre> hi {JSON.stringify(page, null, 2)}</pre> */}

//       <div>blocks isss</div>
//       <pre>
//         {page.blocks.results.map((block: any) => (
//           <pre key={block.id}>{JSON.stringify(block, null, 2)}</pre>
//         ))}
//       </pre>
//     </>
//   )
// }

// export default NotionUpload
