import { CONFIG } from "./configuration"

function determineOptionByDate() {

    const form = FormApp.openById(CONFIG.formID);

    const item = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE)[4].asMultipleChoiceItem()

    const date = {
        today: new Date(),
        startDate: new Date(CONFIG.startOptionDay),
        endDate: new Date(CONFIG.endOptionDay)
    }

    const customChoice = item.createChoice("teste")

    Logger.log(`Today: ${date.today}`);
    Logger.log(`Start Date: ${date.startDate}`);
    Logger.log(`End Date: ${date.endDate}`);

    let choices = item.getChoices()

    Logger.log(choices)

    const updatedChoices = choices.map(choice => choice.getValue())

    Logger.log("Updated", updatedChoices)

    if (date.today >= date.startDate && date.today <= date.endDate) {


    }

    item.setChoices(

        updatedChoices.map(choice => item.createChoice(choice))
    )
}