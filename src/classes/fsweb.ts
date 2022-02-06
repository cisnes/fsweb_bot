const puppeteer = require("puppeteer");
import { injectable, singleton } from "tsyringe";

@singleton() // Definer klassen som singleton så det kun vil eksistere ett objekt
@injectable() // Gjør klassen injectable som dependency. (Sålangt ikke i bruk)
class FSweb {
  // Construct
  constructor() {
    console.log("# Initializing FSweb object");

  }
}

module.exports.FSweb = FSweb;
