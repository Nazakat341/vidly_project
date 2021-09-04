//Post /api/return {customerid,movieid}

//return 401 if clint is not logged in
//return 400 if customerId is not provided
//return 400 if movieID is not provided
//return 404 if no rental found for this customer/movie
//return 400 if rental is already processed
//return 200 if valid request
//set the return date
//Calculate the rental fee
//increase the stock
//return the rental 