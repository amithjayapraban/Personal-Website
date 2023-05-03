import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
console.log(fs.readdirSync(postsDirectory),'zxzx');
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  if(fileNames.length>1){
  const allPostsData = fileNames.map((fileName) => {
   
    const slug = fileName.replace(/\.md$/, "");


    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    
    return {
    slug,
      ...matterResult.data,
    };
  
  });
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
else{
  return null
}
}
