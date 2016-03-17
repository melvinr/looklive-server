# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).


#Performance Tweaks
##Initial state
![Initial State](readme-images/1-html/before.png)

##Semantic HTML & Deleted excessive HTML
The difference was bigger than I thought it would be. Apparently using HTML can have a considerable effect on your website's performance.
###Before
![Before](readme-images/1-html/before.png)
###After
![After](readme-images/1-html/after.png)

##Optimized header image and changed from PNG to JPG
This was a huge performance boost for the website. The loading time dropped more than 3(!) seconds. This has made me realize that it's really important for webdevelopers to keep the size of their images in check.
###Before
![Before](readme-images/1-html/after.png)
###After
![After](readme-images/2-header-image/after.png)

##Optimized CSS
Optimizing CSS had a smaller impact on the page's load time than I previously thought it would have. Still it reduced the loading time by almost 100ms.
###Before
![Before](readme-images/3-optimized-css/before.png)
###After
![After](readme-images/3-optimized-css/after.png)

##Changed PNG icons to SVG Spritesheet
Changing the PNG icons to an SVG spritesheet barely had any impact on the site's loading time.
###Before
![Before](readme-images/4-svg-spritesheet/before.png)
###After
![After](readme-images/4-svg-spritesheet/after.png)

##Deleted jQuery
Deleting jQuery had significant influence on the page's load time. This dropped by 780ms. Although I have to say that I expected the drop to be a lot bigger, since there is a lot of discussion about how much impact jQuery can have on a website's performance.
###Before
![Before](readme-images/5-no-jquery/before.png)
###After
![After](readme-images/5-no-jquery/after.png)

##Optimized header image again
Since the header image was still too big, I decided to optimize it some more. I managed to drop the file size from 800kb to around 150 kb. The result was quite significant, reducing the load time by 1.2 seconds.
###Before
![Before](readme-images/6-header-image-scnd/before.png)
###After
![After](readme-images/6-header-image-scnd/after.png)

##Implemented Service Worker
By implementing a service worker you can make your application work offline by saving its content as cache. This was a huge boost for the load time of the website, which was reduced drastically.
###Before
![Before](readme-images/6-header-image-scnd/after.png)
###After
![After](readme-images/7-service-worker/after.png)

##Conclusion
After implementing some tweaks to reduce the load time, I came to the realization that a lot of responsibility belongs to us as developers. It's our job to make sure images are small and the correct type. We have to decide whether or not to implement jQuery, and we have total control over how we write our HTML and CSS. The decisions we make during the development of a website will have a big impact on the way a user sees a website, and the company it belongs to.



