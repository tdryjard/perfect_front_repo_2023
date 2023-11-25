# Perfect front repo 2023

## Technos & libraries

### Next.js

Why : SSR rendering for better performance and SEO (and React itself recommends switching to Next.js)



### typescript

Why : of course



### styled component

Why : The fashion is tailwind css, but styled component remains the best option: 

- No stuff like that everywhere in your jsx `<p class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-24 h-24 rounded-full mx-auto">`(yuck)

But rather <Text> (clean)

- Easy dynamic styling (cool)

- Allows you to wrap component libraries, for example to switch easily from ant-design to Material UI (SOLID be like) 



### Material UI

Why : Well designed and well maintained



#### RTK & RTK query

Why : Even if it's not easy to use at first, it's still a good option for managing query caches and global variables.



### jest & testing-library

Why : even if I find them full of flaws, it remains the best library for unit testing. 



#### eslint / prettier / husky

Why : So that your code doesn't turn to dung 