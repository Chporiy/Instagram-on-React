export default class Instaservice {
  constructor() {
    this._apiBase = 'http://localhost:3000/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json(); // Возвращение промиса
  }

  getAllPosts = async () => {
    const res = await this.getResource("posts/");
    return res;
  }

  getAllUsers = async () => {
    const res = await this.getResource("posts/");
    return res.map(this._transformPostsForUsers);
  }

  _transformPostsForUsers = (post) => {
    return {
      name: post.name,
      photo: post.photo,
      altname: post.altname,
      id: post.id
    }
  }

  getAllPhotos = async () => {
    const res = await this.getResource("posts/");
    return res.map(this._transformPosts); 
  }

  _transformPosts = (post) => {
    return {
      src: post.src,
      alt: post.alt,
      id: post.id
    }
  }

  
}