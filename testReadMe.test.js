const {testScore, teacher, squares, checkTime, bookClub, davidsExpense, amyShoppingList} = require("./readMe.js");

test("calculate student scores", ()=> {
   let scoresGreaterThanSeventy = [ 71, 80, 67, 82, 50, 98, 87, 70, 75, 64];
    let answer = testScore(scoresGreaterThanSeventy);
    expect(answer).toEqual([71, 80, 82, 98, 87, 70, 75]);
});

test("add 5 to student scores", ()=> {
    let studentScores = [ 71, 80, 67, 82, 50, 87, 70, 75, 64];
     let answer = teacher(studentScores);
     expect(answer).toEqual([76, 85, 72, 87, 55, 92, 75, 80, 69]);
 });

 test("square numbers", ()=> {
    let squareNumbers = [ 2, 4, 5, 3];
     let answer = squares(squareNumbers);
     expect(answer).toEqual([4, 16, 25, 9]);
 });

 test("find pm in timing", ()=> {
    let timing = ["9:00AM", "8:00AM", "2:00PM", "4:00PM", "5:00PM", "3:00PM"];
     let answer = checkTime(timing);
     expect(answer).toEqual(["2:00PM", "4:00PM", "5:00PM", "3:00PM"]);
 });

 test("distribute each book to member ", ()=> {
    let memberList = ["Emily","Jack","Sophia","Daniel"];
    let bookList =  ["Bible","Java book","Python","Go"];
    let result = {"Emily": "Bible", "Jack": "Java book", "Sophia": "Python", "Daniel": "Go" }
    expect(bookClub(memberList, bookList)).toEqual(result);

});


test("calculating values for david ", ()=> {
    let answer = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let bookList = davidsExpense(answer);
    expect(bookList).toEqual(380);

});

test("organising amy's shopping list and filtering out unhealthy food", () =>{

    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }];
        const answer = amyShoppingList(shoppingList);
        expect(answer).toEqual([{ name: 'Apples', category: 'Fruits', isHealthy: true } ,{ name: 'Carrots', category: 'Vegetables', isHealthy: true }, { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }]);
});