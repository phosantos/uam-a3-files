import { NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Posts } from '../interfaces/posts';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule implements OnInit {
  posts: Array<Posts> = [];

  ngOnInit(): void {
    const fetchBlog = async(url) => {
      const response = await fetch(url)
      const blogData = await response.json()
      console.log(blogData)

      return blogData
    }

    fetchBlog('https://uam-a3-usabilidade-blog-api.up.railway.app/posts').then((dadosFinais) => console.log(dadosFinais))

  //   const url = `https://uam-a3-usabilidade-blog-api.up.railway.app/posts`
  // this.fetchBlog(url)
  //  .then((resposta: Response) =>{
  //    if(resposta) {
  //     console.log(resposta)
  // }
  // }).catch(err => console.log(err));
  // }
  // public fetchBlog(url: string): Promise<void | Response> {
  //   return fetch(url)
  //   .then(response => response.json())
  //   .then(blog => {
  //     console.log(blog)
  //   })
  }
}



