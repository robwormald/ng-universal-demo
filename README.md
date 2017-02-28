## Angular Universale : SSR + CSR

The purpose of this demo is to show one application code used without modification for server-side rendering (SSR) and client-side rendering (CSR).  
CSR is the way of rendering we all know : the client receives HTML+CSS+JS. The JS works on the DOM and produces the page with its behavior. Two problems with CSR : 

 * the JS code obfuscate the rendered HTML to the search engines and to the preview engines used by some websites when showing links (LinkedIn...)
 * the production/rendering can take a lot of time, especially on mobiles.

SSR means the Angular app is run on the server, the rendered HTML is then sent to the browser. 

**With [Angular Universal](https://github.com/angular/universal) (now adopted by the Angular Team) the SSR and CSR processes share the same application code.** 

## Quick start

After downloading/cloning this repo : 

    npm install

### Launch app with client-side rendering : 

    npm run csr

Go to 127.0.0.1:**4200**  
CTRL+U to see the page source : nothing fancy.

### Launch app with server-side rendering : 

    npm run ssr

Go to 127.0.0.1:**8000**  
CTRL+U to see the page source: this is the server-side rendered HTML !
