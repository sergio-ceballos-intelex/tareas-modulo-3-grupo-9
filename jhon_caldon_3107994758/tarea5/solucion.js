// logica proposicional
true || true || false && true || false && true && true || false     
true || true || false || false || false     
true || true || false || false    
true || false    
true  

___________________________________________________________________________

true && (false || false && (true && (true || false && true))) || false && (true || false)    
true && (false || false && (true && true)) || false && true    
true && (false || false && true) || false  
true && false || false  
false  

___________________________________________________________________________

!(!true && (false || false && !!!true || (true && !false))) || false && true  
!(!true && (false || false && !!!true || true)) || false  
!(!true && true) || false  
!false || false  
true   
