// ============================================================
// Integracijos / Integrations
// ============================================================
//
// Google Sheets RSVP webhook
// --------------------------
// Norėdami, kad RSVP atsakymai automatiškai būtų įrašomi į
// Google Sheets, atlikite šiuos žingsnius:
//
// 1. Atidarykite savo Google Sheets dokumentą.
// 2. Meniu pasirinkite: Extensions → Apps Script
// 3. Įklijuokite šį kodą (pakeiskite SHEET_NAME jei reikia):
//
//    function doPost(e) {
//      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP') 
//        || SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');
//      const data = JSON.parse(e.postData.contents);
//      if (sheet.getLastRow() === 0) {
//        sheet.appendRow(Object.keys(data));
//      }
//      sheet.appendRow(Object.keys(data).map(k => data[k]));
//      return ContentService.createTextOutput(JSON.stringify({ ok: true }))
//        .setMimeType(ContentService.MimeType.JSON);
//    }
//
// 4. Spauskite "Deploy" → "New deployment" → tipas "Web app"
//    Execute as: Me, Who has access: Anyone
// 5. Nukopijuokite gautą URL ir įklijuokite žemiau.
//
// Jei laukas paliktas tuščias — RSVP atsakymai vis tiek
// saugojami duomenų bazėje ir matomi admin skydelyje.

export const GOOGLE_SHEETS_WEBHOOK_URL = "";
