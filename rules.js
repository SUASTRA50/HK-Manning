const MANNING_RULES = {
    targetCreditPerRA: 14,
    maxCreditPerRA: 14.1, // Batas maksimal kredit per RA (ketat)
    targetArrivalPerSupervisor: 17,
    credits: {
        stayover: 0.8,  // Sesuai gambar UI
        departure: 1.0,  // Sesuai gambar UI
        dropped: 1.0,    // Sesuai gambar UI
        pickup: 0.4,     // Sesuai gambar UI
        turndown: 0.2    // Sesuai gambar UI
    },
    distributionRules: {
        // Urutan prioritas pengisian tugas secara berurutan
        fillPriority: ["stayover", "dropped", "departure", "pickup", "turndown"],
        splitStayoverEqually: false, // Dibuat false agar RA awal diisi penuh sampai 14.1
        splitTurndownEqually: false  // Dibuat false agar RA awal diisi penuh sampai 14.1
    }
};
