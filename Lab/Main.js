function doesCircleExist(commands) {
    //G -> Forward 1 step
    //L --> Turn Left
    //R -- > Turn Right
    
    // RG
    /***
     * [0,0,0,0]
     * [0,0,0,0]
     * [0,0,0,0]
     * [0,0,0,0]
     * 
     */
    let result=[];
    for(let i of commands){
         if(i==='RG' || i=== 'LG'  || i === 'L' || i=== 'R'){
             result.push('YES')
             continue;
         }
         if(i==='G'){
             result.push('NO');
             continue;
         }   
         let r = 0;
         let c = 0;
         let comArr = i.split('');
         let prevComm ='';
         for(let j of comArr){
             if(j==='G'){
                 continue;
             }else if(j==='R'){
                if(prevComm===j){
                    c--;
                }
                else{
                    prevComm=j;
                    c++;
                }
            }else if(j==='L'){
                if(prevComm===j){
                    r--;
                }
                else{
                    prevComm = j;
                    r++;
                }
               
             }
            
         }
         result.push(r===0 && c===0 ?'YES':'NO');
       
    }
    return result ;
}
doesCircleExist([ 'RRRGGLRLLLGLLRLLLLGGLRLLLLLLRRLRGRGRRRLRGRRGGGLGGRLLLRLRLRRLLGGRLGLRLRLLLRLLLRLLGLRRRLLLRGRRLLLLLRRLRRRRLRLRLLLRLRGLLGRGRGLGRLRLGLLRLRLLGRGLGLRGRRLLRRLLLLLLLLLRRLGGRRLRGLRGLRGRGLLGLRRRRGRRGGGRLGLLRLRLLLLGLLLRGRRRRRGRLRRRRRRGLLGLLRRGLGGLGGGLRLLRGLGRRLGRRGRLGLLRRLRRLGRGGLRLLGRRLLLRRLRGLRLRLLLRLLLRLRGRRGRRLRLGRLRRRGGRLRGGLLRLLGRGLLLRGGLLLGRRLLLGRLLLLLRGGGRLGLRRLLGRRLGRGGLRRLRGLRLLRRLLLGRLLLLLGRRRRRGLRLRRLRLRRRLLLLLRRLGGLRRLLLLGRLLGLRGRRGLLLLRLRRLLGGRRRLLRLLRGRGLGLGRRLLLGLRLLLLLLGRGLLRRLLRRLGLLGGGRLRRRGRRRLGLGLLLLLLLLRLLRLLRGRGRRGGGLRLLRRRLRLLRRRRGLRRLRLGRLLGLRRLLRGRGLGGRRLRGGLRGGRLLLLRLLGLGRGRGLRRRRLLGLGLLGGRLLRLRLLRLRRLLLRGLRGLGGLLLRRGRLRGLGLLLLLLRLRRLGGRRGLLGRGRGLRRRRRRGLLRGRLLGGGRLLGGLRGLLLLRLLRLLLGLLLLGGGGRLRGLGLRRRLRGLLRRRLLRLGRLLLRRLLLLLRRRLGLLRLRRRGGGRLGLGRLGGLGRLLRRLGLGLLGLLRLRRLRLLRRGRLGLRLRLGRGRLLLGRGGRGLLLLRGLRRGRLLLGRLRRRLRGGLLLRLLRLLGRLGRRGGRRLLLRRLGGRLLLLLLRRGGRLRLRLRLLLRLLRGLRLRRRLRRGLLGRGLRRRRRRLRGRLGGRRLGLLGRRRLLLGRRGRGLLRRLGGLRLRLLLLGGRGLGGLLRLGRLLRLLLLGRRRLRRGLLRRRRGRGRLGRLLRRRLLRRRLRRGGLRLRLLRGLLRRLRLLLLRRRRLLLLLLGGLGRRRRLRRLLRLGLGLRLRGLLGGLGLLRRGGLRLLLLLLLGLRLLLLLLLRRLRRRGLGLGLGLLLRRLGLLGRLRLGRRLLLRRRLLRRGRLRGLRRLRRGLRLLLLRGRRRRLLRLLGRLGRGRRLLLRRRRLLLRRLRLRGRLLRGRGLGGRLRLRRRRRRLLGGLRLGLLLLGGRGRLLLLRGLGGRRLRLLRRGLLRLRGGLLRRRLGRLLLLLLLRRRRLGLLRRGRLLGRRRLLRLLGGLLLRLRLLLGRGLLLRLGLGRRLGLGGGRGGLRRRLRGRGRLLRRLRGRLRRGGLRRGRGLLGGGRRRLGGGRGRRGGRRRLRLLRRGGRRLLRRRLRLRLRLGRLRRLRGLLLLLLRRGGRGRRLLRLLLLRRLLLRRRRGGLLRLRLRGRLLLGRLRLRLLLRRLRGLLLGGRLRLRRLGRGRRRGLGGGRLGRRGGRLLLRRGRGLLRLRRRRLLLLRLRRLGRGLRLRRRRRRRRLRLLLRLLGLRRLLLLLRLRGRGRRLRLRGLRLLLRLRRGLGRLRRGLLGGLRLRGLLLLGGRLLLLLLLLRGRGLLLLRLGLLGGLRLLLLRGRGRLLGLLLRRGRLRLRRRRGGRRRRRGLGLRLLRGLRRLLGLLGRLLRLRGLLGRLLGGRLRGRGGRGGRGGRLLLRLRRLRGLLGGLLGRLGLLRLGLLRGLRGRRGGRRLRGLLGLRLGRLLRLLGRRRLRGLGLRLRGRLGRLLGGRRGRLGGLGLLLRLLGRGLGGRLGRGLGRRRRRRLRRGLLRGLRLGRRRLGRRLRLGRRRLLGLLLGGGLLRRLLLRRRLRLLLRLLLRLRLGLLRLLRLRLRLRLLLRRRGRLGRLLLLRLLRRLRRLRGGLRLRLLLLLRLRLGRLRLLLLLRRRGRRLLLLLRRLGRRRRLLRRGGLRLRRGLRLRRGLLGLRRLRRLRLLLGLGLGRLRLGLRLLLLRLRRGLGGLGLGLGRLGLLRLRRGRLRLRLGRGGGGLLLLLLRLRGRRLLLGLGLRLLLLRRLRRRLRLLLLRRLRRRLLLRLGRLLRLGLRLLLRLRLRGLLRRGLGGLLRLLLGRRLRLLRGLRRRGRRRLRGLRRRLLRGRRLLLRLLR']);