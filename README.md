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


#1: Progressive Web App
##What are progessive web apps?

Progressive web applications are websites that use some of the latest web technologies, and create an experience as close to a native application as possible. They are websites that start out in a tab in your browser, but as you use the application more it will give you a popup, offering to be added to your homescreen. While it may sound as no more than a basic bookmark, in reality it is a lot more than that. The power of PWAs lies in the fact that, over time, you will start building a relationship with them. They will start acting as a native app and offer functionalities previously only available to those apps. To give examples, a PWA has the ability to send push notifications and work offline. As well as offering a fullscreen experience. All this without having to download it from an app store.

###Characteristics
According to Google, progressive web apps are:
- **Progressive** - They work for every user, regardless of the browser.
- **Responsive** - They fit on every screen.
- **Connectivity independent** - Enhanced with service workers to work offline and with low quality network connections.
- **App-like** - Feel like a native application.
- **Fresh**	- They are always up-to-date, thanks to the service worker.
- **Safe** - Served via HTTPS.
- **Discoverable** - Are identifiable as "applications", allowing search engines to find them.
- **Re-engageable** - Make re-engagement easy through features like push notifications.
- **Installable** - Allow users to keep apps on the home screen, without needing an app store.
- **Linkable** - Easily shareable via URL.

According to TJ van Toll, at a high level, for a web app to be progessive, it must do three things:
- Register a service worker, giving the application the ability to work offline and send push notifications etc.
- Run on HTTPS, it has to be served in a safe environment, protecting the user from nasty, harming scripts being injected.
- Create an *app manifest file*, in which you specify information about your app, its name would be a good start.

For speed and functionality PWAs rely on the Application Shell Architecture and Service Workers. Think of it like this: service workers have the basic interface and design of the web application ready to be served at all times. This makes for the shell of the application. In Application Shell Architecture service workers first serve the shell, and then content is delivered through API requests. Note that these will often be cached by a service worker. This allows the application to show the user the content he last saw when visiting the site, while waiting on new content to be loaded. Which, according to Google, allows for a much quicker loading of websites, especially on mobile connections.

###Advantages
- Push notifications.
- App-like experience at a much lower cost.
- Fast loading times.
- It's hosted on the web, saving the user precious storage space.

###Disadvantages
- Not available in app stores, so users will not be able to find your application there.
- Not currently available on iOS. Android only.


##Sources
- http://www.emerce.nl/achtergrond/progressive-web-apps-de-toekomst-van-mobiele-apps
- http://stackoverflow.com/tags/progressive-web-apps/info
- http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/
- http://arc.applause.com/2015/11/30/application-shell-architecture/
- https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/


#2: Task Managers
Task managers are a great way for task automation. Take file minifying or optimizing images for example. Instead of having to execute this task manually, a task manager can do this for you. Ultimately saving you time instead of having to perform repetitive tasks. Currently there are two popular task managers, Grunt and Gulp.

##Grunt vs Gulp
###Grunt
Grunt is a very popular task manager used by a lot of developers and companies. It has a big community and offers a lot of available tasks. 

The basic principle of Grunt is to allow us to easily run certain tasks. A task is a set of code and configuration files that have arleady been created for you. Getting new tasks means installing new plugins through NPM.

###Gulp
Gulp is an alternative to Grunt. It is newer and is regarded as being more flexible than Grunt. Just like Grunt, it works using NPM and the package.json file.

###Difference
One of the main differences between Gulp and Grunt is that Gulp uses streams instead of configurations. A stream is a set of functions, which a file will go through and will be modified in memory. Only at the end of the process the file will be written on the disk. Grunt works differently. As it will handle processes using intermediary files, which are disk I/O operations. Take for example compiling and minifying your SASS file. Grunt will compile it and write it to a temporary file, which is used by the autoprefixer, and then the final product is written to the final (destination) file.

Gulp does this in-memory. Meaning that it will perform the neccessary actions, and will only write the destination file when it's finished. This makes Gulp faster than Grunt.

##Conclusion
Both Grunt and Gulp are great tools that can help you save a lot of time and effort by automating certain tedious tasks. Personally I prefer Gulp over Grunt because of its cleaner API.

#Sources:
- https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.xbq8zamd3
- http://www.hongkiat.com/blog/gulp-vs-grunt/


#Performance Tweaks
##Initial state
![Initial State](readme-images/1-html/before.png)

Initial state: **15.57s**

##Semantic HTML & Deleted excessive HTML
The difference was bigger than I thought it would be. Apparently using HTML can have a considerable effect on your website's performance.

Before: **15.57s**
After: **15.51s**

###Before
![Before](readme-images/1-html/before.png)
###After
![After](readme-images/1-html/after.png)

##Optimized header image and changed from PNG to JPG
This was a huge performance boost for the website. The loading time dropped more than 3(!) seconds. This has made me realize that it's really important for webdevelopers to keep the size of their images in check.

Before: **15.51s**
After: **12.31s**

###Before
![Before](readme-images/1-html/after.png)
###After
![After](readme-images/2-header-image/after.png)

##Optimized CSS
Optimizing CSS had a smaller impact on the page's load time than I previously thought it would have. Still it reduced the loading time by almost 100ms.

Before: **12.31s**
After: **12.22s**

###Before
![Before](readme-images/3-optimized-css/before.png)
###After
![After](readme-images/3-optimized-css/after.png)

##Changed PNG icons to SVG Spritesheet
Changing the PNG icons to an SVG spritesheet barely had any impact on the site's loading time.

Before: **12.22s**
After: **12.19s**

###Before
![Before](readme-images/4-svg-spritesheet/before.png)
###After
![After](readme-images/4-svg-spritesheet/after.png)

##Deleted jQuery
Deleting jQuery had significant influence on the page's load time. This dropped by 780ms. Although I have to say that I expected the drop to be a lot bigger, since there is a lot of discussion about how much impact jQuery can have on a website's performance.

Before: **13.57s**
After: **12.79s**

###Before
![Before](readme-images/5-no-jquery/before.png)
###After
![After](readme-images/5-no-jquery/after.png)

##Optimized header image again
Since the header image was still too big, I decided to optimize it some more. I managed to drop the file size from 800kb to around 150 kb. The result was quite significant, reducing the load time by 1.2 seconds.

Before: **12.79s**
After: **11.58s**

###Before
![Before](readme-images/6-header-image-scnd/Before.png)
###After
![After](readme-images/6-header-image-scnd/After.png)

##Implemented Service Worker
By implementing a service worker you can make your application work offline by saving its content as cache. This was a huge boost for the load time of the website, which was reduced drastically. The reason the load time shows this drop, is because the second time the application is loaded using cache. Since I cached almost all content (all the images for instance), the application can render these in no time.

Before: **11.58s**
After: **287ms**

###Before
![Before](readme-images/6-header-image-scnd/After.png)
###After
![After](readme-images/7-service-worker/after.png)

##Minified and concatenated JavaScript and CSS files
By using Gulp, you can create an automated process in which your JavaScript and CSS files get minimized and concatenated. This means that your js and css code gets ugly, but the files get smaller in size. Furthermore, concatenating merges multiple files into one, so you only have to make a call to one file. This can help give your website/application a performance boost.

The boost I got wasn't as big as I expected it to be, nonetheless, all the pieces matter.

Before: **11.37**
After: **11.29s**

###Before
![Before](readme-images/8-minified-concat/before.png)
###After
![After](readme-images/8-minified-concat/after.png)

##Image optimization using Gulp
Using Gulp you can create an automized process in which your images get optimized. This is a great way to relieve you from a lot of repetitive, manual and timeconsuming tasks. Since images take a lot of space and render time, it's important to optimize them. To make them a lot smaller in size, whilst still looking good.

Because I already optimised the header image manually, I didn't expect too much of a boost to the load time. As was the case. The load time dropped by around 20 ms, but this number was extremely variable since the timeline didn't show the same timestamp on every reload.

Before: **11.29s**
After: **11.27s**

###Before
![Before](readme-images/9-image-optimization/before.png)
###After
![After](readme-images/9-image-optimization/after.png)

##Webfont using Fontface Observer
By using Fontface Observer you can make your custom font available after the initial loading of the website. The user will first get to see the fallback font in a Flash of Unstyled Text (FOUT). As soon as the font is loaded, it will add this to the page. Changing the font from the fallback to the custom font.

I didn't expect a real boost to the page, since it's only one font that's being loaded. As expected, the results weren't too exciting. With a boost of around 10ms, this isn't much of a win. But what is great, is that when the page loads, the user gets to see unstyled text instead of no text at all. Enabling the user to read the content.

Before: **11.29s**
After: **11.28s**

###Before
![Before](readme-images/10-web-font/before.png)
###After
![After](readme-images/10-web-font/after.png)


##Conclusion
After implementing some tweaks to reduce the load time, I came to the realization that a lot of responsibility belongs to us as developers. It's our job to make sure images are small and the correct type. We have to decide whether or not to implement jQuery, and we have total control over how we write our HTML and CSS. The decisions we make during the development of a website will have a big impact on the way a user sees a website, and the company it belongs to. By using a task manager like Gulp, you can automate a lot of tedious, repetitive tasks which can give your site a performance boost. This makes for a great way to save time, and boost your website.

##Advice
After testing these performance tweaks, my advice would be to implement as many of them as possible. With this I mean, implement the ones that you think will give a decent to great boost to the performance. By implementing the above tweaks I went from a page that took **15.57s** to load on a 4G connection, to **11.27s** respectively. This is a great performance boost, and definitely worth the effort. One of the most useful tweaks for the LookLive page, would be to optimize as many images as possible. Since this is the website's main component it can save a lot of loading time.


#3: Looklive Online
The looklive application is online and can be seen at https://performance.mreijnoudt.com





