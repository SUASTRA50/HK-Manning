/* =========================================================
   FILE KONFIGURASI RULES & BOBOT WORKLOAD
   Anda bisa mengubah nilai angka di bawah ini sesuai kebutuhan.
   ========================================================= */

const MANNING_RULES = {
    // Target kredit per Room Attendant (RA)
    targetCreditPerRA: 14,

    // Bobot Kredit per Jenis Pekerjaan
    credits: {
        stayover: 0.80,
        departure: 1.00,
        dropped: 1.00,
        pickup: 0.40,
        turndown: 0.20
    },

    // Aturan Pembagian Tugas
    distributionRules: {
        splitStayoverEqually: true,  // Stayover dibagi rata ke semua RA?
        splitTurndownEqually: true,  // Turn Down dibagi rata ke semua RA?
        
        // Prioritas pengisian sisa kredit RA
        fillPriority: [
            "dropped",
            "departure",
            "pickup"
        ]
    }
};


