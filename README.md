Data Story:
At first, we were given a CSV document to work with and produce an outcome. To accomplish the desired result in JSON format, we explored accessible solutions and found a tool called "Papaparse," a library fit for changing over CSV files into JSON. While this library worked completely in the development server, we experienced issues while deploying it to the production server, as it was not suitable for that environment. This prompted us to rethink our methodology and find an answer that would be viable with both development and production servers.

After conducting further research, we ran over "XAMPP," a SQL database server that empowers us to work with data sets in a PHP improvement environment utilizing SQL. We then had to upload the CSV file to the database, and they were automatically changed over into SQL format. Nonetheless, we saw that the data representation was not as expected. To address this, we downloaded the data and performed manipulations in VSCode to appropriately address the "title" segment most especially.

After rolling out the important improvements in VSCode, the data looked fine, and we reuploaded it to the server, accomplishing our underlying objectives. We then exported the data, and fortunately, XAMPP provided multiple format options. Without hesitation, we selected JSON format for the export.  Decisively, we chose JSON design for the export. This permitted us to import the array containing the images and data into our project, successfully conquering the difficulties and adding dynamism, particularly to the image angles.

To keep a smoothed-out bundle with insignificant conditions, we eliminated superfluous components. In any case, taking into account the enormous measure of image data, we needed a solution to ensure a smooth and visually pleasing experience when they were displayed. To achieve this, we incorporated the "react-lazy-load-image-component" library, which empowered a smooth and blurred change impact for the images.

Moreover, we took pride in making our own data structure, working together collectively and not depending on outside libraries or chat.js libraries. This customized approach permitted us to yield the data in a way that lined up with our vision and objectives.

And finally, after working on the Desktop/Laptop view of our data, we also with the aid of tailwind got the responsiveness to enable mobile viewers have a crisp, clear and comprehensive view of our data. We want to believe that you find our work satisfying and thank you for your consideration.



Thought Process:
Generally speaking, there was a spark and a willingness to explore different arrangements or solutions, adjust to difficulties, and utilize creativity and resourcefulness to successfully accomplish the ideal result. The team showed commitment to streamlining our project and assuming command over the implementation process to guarantee an effective result and maintain creativity. We wanted to output the data in a way that seems not ordinary and had to navigate through the hurdles that awaited.





Libraries Used:
Reactjs
Vite
XAMPP
React-lazy-load-image-component
Tailwindcss
# pokemon
