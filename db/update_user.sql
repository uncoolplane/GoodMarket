update user
  set user.name=$2,
  user.email=$3,
  user.password=$4
where user.id=$1
