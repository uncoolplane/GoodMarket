update product
  set name=$2,
  description=$3,
  unitprice=$4,
  departmentid=$5
where
  product.id=$1
