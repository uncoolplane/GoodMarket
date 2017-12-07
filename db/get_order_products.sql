select * from product
  inner join order_product on product.id=order_product.productid and order_product.orderid=$1
order by product.name
