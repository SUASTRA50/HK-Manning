const MANNING_RULES = {
    targetCreditPerRA: 14,
    maxCreditPerRA: 14.1, // Maksimal credit per RA
    targetArrivalPerSupervisor: 17,
    credits: {
        stayover: 0.8,
        departure: 1.0,
        dropped: 1.0,
        pickup: 0.4,
        turndown: 0.2
    },
    distributionRules: {
        fillPriority: ["dropped", "departure", "pickup"],
        splitStayoverEqually: true,
        splitTurndownEqually: false
    }
};
