import NavBarCreatePost from "@/components/NavBarCreatePost";
import PostForm from "@/components/PostForm";

export default function CreatePost() {
  return (
    <main className="flex flex-row ">
      <div className="flex flex-col w-4/6">
        <NavBarCreatePost />
        <PostForm/>
       
      
        
      </div>
    
    
    </main>
  );
}
