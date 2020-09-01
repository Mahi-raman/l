function istouching()
{
  if ((moving.x-fix.x<moving.width/2+fix.width/2)&&(fix.x-moving.x<moving.width/2+fix.width/2)&&
  (moving.y-fix.y<moving.height/2+fix.height/2)&&(fix.y-moving.y<moving.height/2+fix.height/2))
  {
    moving.shapeColor="red" ;
    fix.shapeColor="green" ;
  }
  else 
  {
    moving.shapeColor="grey" ;
    fix.shapeColor="grey" ;
  }  
}

