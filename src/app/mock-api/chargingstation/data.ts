export const chargingstation = [
    {
      evcs_code: "H00001",
      evcs_vendor: "Hyundai",
      evcs_site: "Botani Square",
      city: "Bogor",
      address: "Jl Pajajaran",
      image: "",
      
      gps_loc_x: "",
      gps_loc_y: "",
      station_amount: 5,
      station_available: 3,
      station_detail: [
        { location: "Lobby Utara", chargingno: "1", connector: "CCS/SAE", capacity: "50", available: true },
        { location: "Lobby Utara", chargingno: "2", connector: "CHAdeMO", capacity: "50", available: true },
        { location: "Lobby Utara", chargingno: "3", connector: "J-1172", capacity: "22", available: false },
        { location: "Lobby Utara", chargingno: "4", connector: "J-1172", capacity: "7.2", available: true },
        { location: "Lobby Utama", chargingno: "1", connector: "CCS/SAE", capacity: "62.5", available: false }
      ]
    },
    {
      
      evcs_code: "H00002",
      evcs_vendor: "Hyundai",
      evcs_site: "Lotte Yasmin",
      city: "Bogor",
      address: "Jl Yasmin",
      image: "",
      
      type: "2",
      gps_loc_x: "",
      gps_loc_y: "",
      station_amount: 2,
      station_available: 2,
      station_detail: [
        { location: "Gate 1", chargingno: "1", connector: "CHAdeMO", capacity: "50", available: true },
        { location: "Gate 1", chargingno: "2", connector: "J-1172", capacity: "7.2", available: true }
      ]
    }
  ];