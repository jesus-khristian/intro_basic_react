import React from "react";

const Product = ({ product, products, car, addProduct }) => {
  //podemos aplicar destructuring a el props product para no escribir product.name
  const { id, name, price } = product;

  //Agregar product in card
  const selectProduct = (id) =>{
        const product = products.filter(product => product.id === id)[0];
        addProduct([
            ...car,
            product
        ]);
  };

  const deleteProduct = id => {
        const products = car.filter(product => product.id !== id);

        //agregar productos en state
        addProduct(products);

  }



  return (
      <div className="container text-center">
          <div className="row m-3">
              <div className="col">
              <div className="card">
      <h2>{name}</h2>
      <p>$ {price}</p>
        {products
        ?(   <button
            className="btn btn-success"
            onClick={()=> selectProduct(id)}
            >Buy</button>
            )
        :(<button
            className="btn btn-success"
            onClick={()=> deleteProduct(id)}
            >Delete</button>)
        
        }
    </div>
              </div>
          </div>
      </div>
   
  );
};

export default Product;
