import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split('/');
  const id = urlParts && urlParts[1] === 'products'? Number(urlParts[2]): null;
  console.log(id);

  //GET all products  
  if (url === "/products" && method === "GET") {
    const products = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "This is products route.",
        data: products,
      }),
    );
  }
  else if (method ==="GET" && id !== null){
    const products = readProduct();
    const product = products.find((p : IProduct) => p.id === id);
    
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrieved successfully.",
        data: product,
      }),
    );
  }
};
