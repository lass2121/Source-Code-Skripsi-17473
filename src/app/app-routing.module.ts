import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';

const routes: Routes = [
 
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: ()=> import('./login/login.module').then(m =>m.LoginPageModule)
  },
  {
    path: 'homepagekaprodi', children: [
      {
        path: '',
        loadChildren: './homepagekaprodi/homepagekaprodi.module#HomepagekaprodiPageModule'
  },
  {
        path: 'inputmaster', 
        loadChildren: './homepagekaprodi/inputmaster/inputmaster.module#InputmasterPageModule'
        
  },
  {
        path: 'inputscorekaprodi', children: [
          {
            path: '',
            loadChildren: './homepagekaprodi/inputscorekaprodi/inputscorekaprodi.module#InputscorekaprodiPageModule'
          },
          {
            path: ':nimId', children: [
              {
                path: '',
                loadChildren: './homepagekaprodi/inputscorekaprodi/inputscorekelaskaprodi/inputscorekelaskaprodi.module#InputscorekelaskaprodiPageModule'
              },
              {
                path: ':kelasId', children: [
                {
                  path: '',
                  loadChildren: './homepagekaprodi/inputscorekaprodi/inputscorejeniskaprodi/inputscorejeniskaprodi.module#InputscorejeniskaprodiPageModule'
                },
                {
                  path: ':scoreId', children:[
                    {
                    path: '',
                    loadChildren: './homepagekaprodi/inputscorekaprodi/inputscorebuktikaprodi/inputscorebuktikaprodi.module#InputscorebuktikaprodiPageModule'
                    },
                  ]
                }
                ]
              }
            ]
          }
        ]
  },
  {
    path: 'monitoringkaprodi', children:
    [
      {
        path: '',
        loadChildren: './homepagekaprodi/monitoringkaprodi/monitoringkaprodi.module#MonitoringkaprodiPageModule'
      },
      {
        path: ':monitoringId',
        loadChildren: './homepagekaprodi/monitoringkaprodi/monitoringdetailkaprodi/monitoringdetailkaprodi.module#MonitoringdetailkaprodiPageModule'
      }
    ]
  },
  ]},
  {
    path: 'homepagedosen', children: [
      {
        path: '',
        loadChildren: () => import('./homepagedosen/homepagedosen.module').then( m => m.HomepagedosenPageModule)
      },
      {
        path: 'inputscoredosen', children: [
          {
            path: '',
            loadChildren: './homepagedosen/inputscoredosen/inputscoredosen.module#InputscoredosenPageModule'
          },
          {
            path: ':nimId', children: [
              {
                path: '',
                loadChildren: './homepagedosen/inputscoredosen/inputscorekelasdosen/inputscorekelasdosen.module#InputscorekelasdosenPageModule'
              },
              {
                path: ':kelasId', children: [
                {
                  path: '',
                  loadChildren: './homepagedosen/inputscoredosen/inputscorejenisdosen/inputscorejenisdosen.module#InputscorejenisdosenPageModule'
                },
                {
                  path: ':scoreId', children:[
                    {
                    path: '',
                    loadChildren: './homepagedosen/inputscoredosen/inputscorebuktidosen/inputscorebuktidosen.module#InputscorebuktidosenPageModule'
                    },
                  ]
                }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'monitoringdosen', children:
        [
          {
            path: '',
            loadChildren: './homepagedosen/monitoringdosen/monitoringdosen.module#MonitoringdosenPageModule'
          },
          {
            path: ':monitoringId', children: [
              {
                path: '',
                loadChildren: './homepagedosen/monitoringdosen/monitoringkelasdosen/monitoringkelasdosen.module#MonitoringkelasdosenPageModule'
              },
              {
                path: ':pertemuanId',
                loadChildren: './homepagedosen/monitoringdosen/monitoringdetaildosen/monitoringdetaildosen.module#MonitoringdetaildosenPageModule'
              },
            ] 
          }
        ]
      },
    ]},
  {
    path: 'homepagemhs', children:[
      {
        path:'',
        loadChildren: () => import('./homepagemhs/homepagemhs.module').then( m => m.HomepagemhsPageModule)
      },
      {
        
          path: ':monitoringMhs',
          loadChildren: './homepagemhs/monitoringmhs/monitoringmhs.module#MonitoringmhsPageModule'
      },
    ] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
