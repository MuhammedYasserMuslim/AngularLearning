

export class StoreData {

  name :string ;
  imgUrl:string;
  branches:string[];


  constructor(name: string, imgUrl: string, branches: string[]) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.branches = branches;
  }
}
