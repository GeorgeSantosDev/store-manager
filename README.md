<h1>Store Manager</h1>

<p>
  Store manager is a CRUD API. It is built using NodeJS, Express and MySQL. MSC architecture (Models, Services, 
  Controllers) was applied in this project.The application was tested using Mocha, chai and sinon.
  
  The project was developed in a docker environment.

  The user is able to Create, Read, Update and Delete products and sales records.
</p>

<h2> Built With </h2>

<div>
 <p> - NodeJS <p/>
 <p>- Express <p/>
 <p> - MySQL <p/>
 <p> - Docker <p/> 
 <p> - Mocha <p/>
 <p> - Chai <p/>
 <p> - Sinon <p/>
 <p> - Conventional commits (extension) <p/>
<div />

<h2>Endpoints<h2/>

<h3> Products: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /products </strong>

<p> Get all products </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/Allproducts.png"/>

<br />
<br />
<br />
<br />
<br />

<strong> /products/:id </strong>

<p> Get product by id </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/product.png"/>
<br/>

<p> Status: 404 </p>
<p> - { message: "Product not found" }</p>

<br />
<br />
<br />
<br />
<br />

<strong> /products/search </strong>

<p> Get product by search term </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/product.png"/>

<p> If not found any product with the search term return all products <p/>

<br />
<br />
<br/>

<h3> - POST  </h3>

<strong> /products </strong>

<p> Create a new product </p>

<strong> Parameters:</strong>
<p> -body <p/>
<img src="./images/postBody.png" />

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/postResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "name is required" }</p>

<p> Status: 422 </p>
<p> - { message: "name length must be at least 5 characters long" }</p>

<br />
<br />
<br/>

<h3> - PUT  </h3>

<strong> /products/:id </strong>

<p> Update a product by id </p>


<strong> Parameters:</strong>
<p> -body <p/>
<img src="./images/postBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/postResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "name is required" }</p>

<p> Status: 404 </p>
<p> - { message: "Product not found" }</p>

<p> Status: 422 </p>
<p> - { message: "name length must be at least 5 characters long" }</p>

<br />
<br />
<br/>

<h3> - DELETE  </h3>

<strong> /products/:id </strong>

<p> Delete a product by id </p>
<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>
<p> Status: 204 </p>
<p> - Nothing </p>

<br />

<p> Status: 404 </p>
<p> - { message: "Product not found" }</p>

<br/> <br/>

<h3> Sales: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /sales </strong>

<p> Get all sales </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/Allsales.png"/>

<br />
<br />
<br />
<br />
<br />

<strong> /sales/:id </strong>

<p> Get sale by id </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/sale.png"/>
<br/>

<p> Status: 404 </p>
<p> - { message: "Sale not found" }</p>

<br />
<br />

<h3> - POST  </h3>

<strong> /sales </strong>

<p> Create a new sale </p>

<strong> Parameters:</strong> <br />
<p> - body <p/>
<img src="./images/salesPostBody.png" />

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/salesPostResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "productId is required" }</p>
<p> - { message: "quantity is required" }</p>

<p> Status: 422 </p>
<p> - { message: "quantity must be greater than or equal to 1" }</p>

<p> Status: 404 </p>
<p> - { message: "Product not found" }</p>


<br />
<br />
<br/>


<h3> - PUT  </h3>

<strong> /sales </strong>

<p> Update a sale by id </p>

<strong> Parameters:</strong> <br />
<p> - body <p/>
<img src="./images/salesPostBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/salesPostResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "productId is required" }</p>
<p> - { message: "quantity is required" }</p>

<p> Status: 422 </
<p> - { message: "quantity must be greater than or equal to 1" }</p>

<p> Status: 404 </p>
<p> - { message: "Product not found" }</p>

<br />
<br />
<br/>

<h3> - DELETE  </h3>

<strong> /sales/:id </strong>

<p> Delete a sale by id </p>
<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>
<p> Status: 204 </p>
<p> - Nothing </p>

<br />
<p> Status: 404 </p>
<p> - { message: "Sale not found" }</p>

<br />
<br />
<br/>

<h2>
  How try the application?
</h2>

<p>
  Using docker (version 1.29 > is required): </br></br>
   1. First run in your terminal <code>docker-compose up -d</code> to up containers. </br>
   2. Then use the command <code>docker exec -it store_manager bash</code> to acess the container terminal. </br>
   3. After it use  <code>npm install</code> to install all dependences. </br>
   4. Run <code>npm start</code> on container terminal to start the application.</br>
   5. If you don´t have any client extension to do the requestions download <code>Thunder Client</code> extension on VS Code.</br>
   6. Select the method on thunder client.</br>
   7. Do requisitions on thunder client using the URL shape http://localhost:3000/endpoint.
</p>
<p>
  Make sure that all containers are up and the ports 3000 and 3006 of your computer are available
<p/>
</br>

<h2>
  How run tests?
</h2>

<p>
   1. First run in your terminal <code>docker-compose up -d</code> to up containers. </br>
   2. Then use the command <code>docker exec -it store_manager bash</code> to acess the container terminal. </br>
   3. Run <code>npm run test:mocha </code> on container terminal.
</p.

<br />
<br />
<br /> 

<p> Any questions or suggestions? Contact me </p>

<a href="https://www.linkedin.com/in/george-santos-dev" rel="nofollow">
  <img
    height="50px"
    width="50px"
    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
  />   
</a>

