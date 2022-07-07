## 100Devs Assignment API
A simple API for locating 100 Devs assignments through an easily accessible API. Updated to class 41.

![image](https://user-images.githubusercontent.com/44350021/177888333-15bf6a5e-5421-43a4-a025-d4f94be791f4.png)
 
## Working Demo
https://simple-100devs-assignment-api.herokuapp.com/

## How to use
Enter class number into the input field to get a list of assignments for that class - assignments will be seperated into "watch", "read", "do", and "push"
If an assignment is repeated, this means it was assigned for both classes

To get a specific task grouping, you can add "/task" to the field. Example: "19/do" 
![image](https://user-images.githubusercontent.com/44350021/177889336-666a0c08-86e2-4363-bfdf-9da93a648784.png)

## Using the API
API endpoint is _/homework_ 
  * Example "https://simple-100devs-assignment-api.herokuapp.com/homework" will retrieve all assignments

_/homework/classnumber_ returns assignments for that class number
  * Example "https://simple-100devs-assignment-api.herokuapp.com/homework/19" will call to class 19

_/homework/classnumber/task_ returns assignments for that class number and task group
  * Example "https://simple-100devs-assignment-api.herokuapp.com/homework/19/do"
