import { CONFIG } from "./configuration";

const optionByDate = () => {
    
    var form = FormApp.openById(CONFIG.formID);
    var multForm = form.getItemById(121263024).asMultipleChoiceItem();

    const clone = multForm.duplicate()
    
    // Get the current date
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth() + 1; // Months are zero-based
    var currentYear = today.getFullYear();
    
    // Add a new choice based on a specific date, e.g., 1st September 2024
    var targetDate = new Date(2024, 8, 1); // Months are zero-based (8 is September)
    
    Logger.log("Current choices: " + clone.getChoices().map(function (choice) { return choice.getValue(); }).join(", "));
    
    var allChoices = clone.getChoices();
    var newChoice = clone.createChoice("Ninja") as GoogleAppsScript.Forms.Choice;
    allChoices.push(newChoice);
    
    Logger.log("New choices: " + allChoices.map(function (choice) { return choice.getValue(); }).join(", "));
    
    clone.setChoices([...allChoices, clone.createChoice("Super")]);
};

optionByDate();