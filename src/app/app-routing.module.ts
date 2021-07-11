import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutUsComponent } from './pages/about-us/about-us.component'
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component'
import { ContactUsComponent } from './pages/contact-us/contact-us.component'
import { HomeComponent } from './pages/home/home.component'
import { NewsComponent } from './pages/news/news.component'
import { ProductsAndServicesComponent } from './pages/products-and-services/products-and-services.component'
import { SocialImpactComponent } from './pages/social-impact/social-impact.component'


const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'products-and-services', component: ProductsAndServicesComponent },
  { path: 'social-impact', component: SocialImpactComponent},
  { path: 'news-and-publications', component: NewsComponent},
  { path: 'blog-posts', component: BlogPostsComponent},
  { path: 'contact-us', component: ContactUsComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}