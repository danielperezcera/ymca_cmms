export const areaList = [
  "Women Locker Room",
  "Men Locker Room",
  "Family Locker Room",
  "Wellness Center",
  "Front Men Bathroom",
  "Front Women Bathroom",
  "Gulick Gym",
  "Gymnasium",
  "Warm Water Pool",
  "Lap Pool",
];

const type = {
  MAINTENANCE: "Maintenance",
  CUSTODIAL: "Custodial",
  OTHER: "Other",
};

class Area {
  constructor() {
    this.ticketList = [];
    this.maintenanceCount = 0;
    this.custodialCount = 0;
    this.otherCount = 0;
  }

  countUpdate(type, operation) {
    if (operation === "add") {
      switch (type) {
        case "Maintenance":
          this.maintenanceCount++;
          break;
        case "Custodial":
          this.custodialCount++;
          break;
        case "Other":
          this.otherCount++;
          break;
        default:
          console.log("Ticket type: ", type, " not found.");
      }
    } else if (operation === "subtract") {
      switch (type) {
        case "Maintenance":
          this.maintenanceCount--;
          break;
        case "Custodial":
          this.custodialCount--;
          break;
        case "Other":
          this.otherCount--;
          break;
        default:
          console.log("Ticket type: ", type, " not found.");
      }
    }
  }

  addTicket(id, ticket) {
    this.ticketList.push({ ...ticket, id });
    this.countUpdate(ticket.type, "add");
  }

  //TODO: getTicketList

  //TODO: deleteTicket
}

export class Branch {
  constructor(areaList) {
    this.areaList = [];

    areaList.forEach((area) => {
      this.areaList[area] = new Area();
    });
  }
}
