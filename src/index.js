function determineOptionByDate() {
  //const CONFIG = { formID: 'YOUR_FORM_ID' }; // Replace with your actual form ID
  const form = FormApp.openById(CONFIG.formID);

  // Get the specific item (Multiple Choice Question) to modify
  const item = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE)[4].asMultipleChoiceItem();

  const today = new Date(); // Current date
  const startDate = new Date('2024-08-02'); // Start date for the option
  const endDate = new Date('2024-09-10'); // End date for the option

  const customChoice = item.createChoice("teste")

  // Log the dates for debugging purposes
  Logger.log(`Today: ${today}`);
  Logger.log(`Start Date: ${startDate}`);
  Logger.log(`End Date: ${endDate}`);

  // Create an array to hold the new set of choices
  let choices = item.getChoices();

  Logger.log(choices.entries())

  const updatedChoices = choices.map(choice => choice.getValue().toString()); // Log the current choices

  console.log("Updated", updatedChoices)

  // Check if the current date is within the specified range
  if (today >= startDate && today < endDate) {
    // Create a new choice and add it to the array
    //updatedChoices.push("Teste"); // Add the new option if the date is within the range
  }

  // Update the form question with the new choices
  const newChoices = [];
  for (let i = 0; i < updatedChoices.length; i++) {
    newChoices.push(item.createChoice(updatedChoices[i]));
  }
  item.setChoices(newChoices)
}