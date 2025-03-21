export type TProject = {
  _id: string;
  title: string;
  sub_title: string;
  image: string;
  full_image: string;
  technologies: string[];
  features: string[];
  live_link: string;
};

export interface IProjectInfo {
  title?: string;
  sub_title?: string;
  image: string;
  full_image: string;
  technologies: string[];
  features: string[];
  live_link: string;
}

// export interface IFormInput {
//   _id: string;
//   name: string;
//   email: string;
//   message: string;
//   title?:string;
//   author?:string;
//   image: string;
//   blog: string;
// }

export interface IFormInput {
  _id: string;
  name: string;
  email: string;
  message: string;
  title?: string | undefined;
  sub_title?: string;
  author?: string | undefined;
  image: string;
  category: string;
  blog: string;
  blogId: string;
}



export type TSkill = {
  _id?: string;
  logo: string;
  name: string;
};

export interface IFormInput {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export type TBlog = {
  _id: string;
  title: string;
  author: string;
  image: string;
  blogContent: string;
  category: string;
};

export type TExperience = {
  _id?: string;
  position: string;
  startDate: string; // YYYY-MM-DD format
  endDate: string; // YYYY-MM-DD format
  company: string;
  companyDescription: string;
  duties: string[];
};

export type TUser = {
  _id?: string;
  email: string;
  password: string;
 

};
