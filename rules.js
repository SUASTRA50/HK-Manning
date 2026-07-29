const MANNING_RULES = {
    targetCreditPerRA: 14,
    maxCreditPerRA: 14.1,
    maxStayoverPerRA: 13, // Batas maksimal stayover per RA = 13 kamar
    targetArrivalPerSupervisor: 17,
    credits: {
        stayover: 0.8,
        departure: 1.0,
        dropped: 1.0,
        pickup: 0.4,
        turndown: 0.2
    },
    distributionRules: {
        // Urutan prioritas sesuai instruksi baru
        fillPriority: ["stayover", "dropped", "pickup", "departure", "turndown"],
        splitStayoverEqually: false,
        splitTurndownEqually: false
    }
};
