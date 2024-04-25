//this is a test

function testScore(number1){
    return number1.filter(num => num >= 70)  
};

function teacher(scores){
    return scores.map(num => num + 5);
};

function squares(number){
    return number.map(num => num * num)
};


function bookClub(members, books){
    const distribution = {};
    for(const [index, member] of members.entries()){
        distribution[member] = books[index];
    }
    return distribution
    
};
let memberList = ["Emily","Jack","Sophia","Daniel"];
let bookList =  ["Bible","Java book","Python","Go"]; 
console.log(bookClub(memberList, bookList));


    function checkTime(pmCheck){
        return pmCheck.filter(check => check.endsWith("PM"));
    };


    function davidsExpense(expenses) {
        let totalExpense = 0;
        
        for (let expense in expenses) {
            totalExpense += expenses[expense];
        }
        return totalExpense;

    };

    
        function amyShoppingList(shoppingList) {
            let healthyItems = [];
           // shoppingList.filter(item => item.isHealthy);
            shoppingList.forEach(item => {
                if (item.isHealthy) {
                    healthyItems.push(item);
                }   
            });
            return healthyItems;
        }
    


module.exports = {testScore, teacher, squares, checkTime, bookClub, davidsExpense, amyShoppingList};



