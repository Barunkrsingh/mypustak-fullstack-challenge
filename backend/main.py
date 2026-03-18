from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage
posts = []
post_id = 1

@app.get("/posts")
def get_posts():
    return posts

@app.post("/posts", status_code=201)
def create_post(post: dict):
    global post_id

    if not post.get("title") or not post.get("body"):
        raise HTTPException(status_code=400, detail="Title & Body required")

    new_post = {
        "id": post_id,
        "title": post["title"],
        "body": post["body"]
    }

    posts.append(new_post)
    post_id += 1
    return new_post

@app.delete("/posts/{id}")
def delete_post(id: int):
    global posts

    for p in posts:
        if p["id"] == id:
            posts = [post for post in posts if post["id"] != id]
            return {"message": "Deleted successfully"}

    raise HTTPException(status_code=404, detail="Post not found")