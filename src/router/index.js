import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}
const RankDetail = (resolve) => {
  import('components/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicList = (resolve) => {
  import('components/music-list/music-list').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('components/user/user').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      // Default redirect to recommend
      path: '/',
      redirect: '/rank'
    },
    {
      path: '/recommend',
      component: Recommend,
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})