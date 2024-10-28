import { taskDescription } from "../Structures/taskDescription";

export   const getLocalstorage = () =>{
    const rawData = localStorage.getItem("swgtodo");
    if (!rawData) return [
      new taskDescription("Something generic", 1, null, ["Helo world", "Hello world 2"]),
      new taskDescription(
        "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out. I also wonder where happens if I go over two lines and go into the thee lines zone",
        2, null, [
          "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out 1", 
          "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out 2"
        ]
      )
    ];
    return JSON.parse(rawData);

  }

  export   const setLocalstorage = (tasks) =>{
  return localStorage.setItem("swgtodo", JSON.stringify(tasks))
  }