update order_product
  set orderid=$2,
  productid=$3,
  quantity=$4
where order_product.id=$1
