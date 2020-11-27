pragma solidity ^0.5.0;

contract TodoList {
    uint public taskCount = 0; //state variable for the smart contract. The current state of the contract.


    struct Task {//codeblock with attributes assigned to a data type form.
        uint id; //identification.
        string content; //text.
        bool completed; //boolean to be check off.
    }

    mapping(uint => Task) public tasks;
    //Array or hash. Key value pair. set to a public reading function, access level(usually for free subscribers).
    constructor() public {//a startup function to create the first input.
        createTask("Add another task.");//default input
    }

    function createTask(string memory _content) public { //storing task into database using a function with argument.
        taskCount ++;//value increment, changing by one.
        tasks[taskCount] = Task(taskCount, _content, false);
        //callsign tasks from mapping connected to data block taskCount, then inserting a new object from stuct Task with the attributes.
    }
}