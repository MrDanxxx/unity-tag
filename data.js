// SAMPLE DATA ONLY (demo).
// In the real system both pages would fetch this from Unity's server:
// the public fields for anyone, the MRP tabs only after sign-in.
// Photos: 7F3K9Q Wikimedia placeholder (credited in index.html); M2X8TD and VFHRDH are real photos.
window.DEMO_RECORDS = {
  "7F3K9Q": {
    equip: "2-1/16\" 5,000 psi Xmas Tree Assembly",
    tagId: "7F3K9Q", serial: "XT-5K-04817",
    status: "ok", statusText: "CERTIFIED", statusSub: "Certificate valid until 14 Oct 2027",
    fields: [["Size / rating", "2-1/16\" 5K"], ["Specification", "API 6A, PSL 3"],
             ["Temp. class", "P-U"], ["Material class", "EE-NL"],
             ["Last refurbished", "Oct 2026"], ["Pressure tested", "14 Oct 2026"],
             ["Certificate no.", "CoC-26-1182", true]],
    photo: "img/wellhead-grey.jpg", photoCaption: "Photographed at dispatch, 16 Oct 2026",
    mrp: {
      workorders: [
        ["WO-26-3391", "22 Sep 2026", "Full strip, refurbish, re-certify", "Closed"],
        ["WO-23-1450", "06 Mar 2023", "Replace upper master valve seats", "Closed"],
        ["WO-21-0877", "19 Jul 2021", "5-yearly re-certification", "Closed"]
      ],
      history: [
        ["16 Oct 2026", "Dispatched to client (Aberdeen quay)", "Stores"],
        ["14 Oct 2026", "Pressure test passed, Certificate of Conformance CoC-26-1182 issued", "Test bay 2"],
        ["08 Oct 2026", "Re-assembled and greased, new gate & seat kit fitted", "Bay 4"],
        ["02 Oct 2026", "Painted (Unity spec P-3)", "Paint shop"],
        ["29 Sep 2026", "Blasted to SA 2.5, NDT on body: no defects", "Blast shop"],
        ["24 Sep 2026", "Stripped and inspected, seats worn beyond limits", "Bay 4"],
        ["22 Sep 2026", "Received from offshore, tagged 7F3K9Q", "Goods in"]
      ],
      certs: [
        ["CoC-26-1182", "Certificate of Conformance", "14 Oct 2026", "Valid"],
        ["PT-26-1182", "Pressure test certificate", "14 Oct 2026", "Pass"]
      ],
      spares: [
        ["GSK-2116-5K", "Gate & seat kit, 2-1/16\" 5K", "1 used", "6 in stock"],
        ["RX-24", "Ring gasket RX-24", "4 used", "48 in stock"],
        ["STM-PK-21", "Stem packing set", "2 used", "11 in stock"],
        ["GR-HT-1", "Valve grease, high temp. (kg)", "1.5 used", "20 in stock"]
      ],
      procedures: [
        ["UP-WH-101", "Xmas tree strip & inspection", "Rev 7"],
        ["UP-WH-120", "Gate valve rebuild, 2-1/16\" to 4-1/16\"", "Rev 4"],
        ["UP-PT-200", "Hydrostatic body & seat testing (API 6A)", "Rev 9"],
        ["UP-PA-010", "Surface prep & coating spec P-3", "Rev 3"]
      ]
    }
  },
  "M2X8TD": {
    equip: "3 Tonne Lifting Sling, 2 m",
    tagId: "M2X8TD", serial: "LS-3T-00417",
    status: "ok", statusText: "IN DATE · OK TO USE", statusSub: "Next thorough examination due 04 May 2027",
    fields: [["Type", "Polyester round sling"], ["Standard", "BS EN 1492-2"],
             ["WLL (straight lift)", "3,000 kg"], ["WLL (choke / basket)", "2,400 / 6,000 kg"],
             ["Effective length", "2.0 m"], ["Colour code", "Yellow (3 t)"],
             ["Last examined", "04 Nov 2026"], ["Next exam due", "04 May 2027"],
             ["Exam report no.", "TE-26-0942", true]],
    photo: "img/strap-M2X8TD.jpg", photoCaption: "Photographed in the lifting store, 11 Nov 2026",
    mrp: {
      workorders: [
        ["WO-26-3602", "04 Nov 2026", "6-monthly thorough examination (LOLER)", "Closed"],
        ["WO-26-1877", "06 May 2026", "6-monthly thorough examination (LOLER)", "Closed"],
        ["WO-25-3014", "05 Nov 2025", "New sling: register, tag and examine", "Closed"]
      ],
      history: [
        ["10 Nov 2026", "Issued to Bay 4 for tree lift", "Lifting store"],
        ["04 Nov 2026", "Thorough examination passed, report TE-26-0942", "Lifting store"],
        ["06 May 2026", "Thorough examination passed, report TE-26-0418", "Lifting store"],
        ["12 Feb 2026", "Pre-use check: cover scuffed, within limits, kept in service", "Bay 2"],
        ["05 Nov 2025", "Received new, examined and tagged M2X8TD", "Goods in"]
      ],
      certs: [
        ["TE-26-0942", "Report of thorough examination (LOLER)", "04 Nov 2026", "Valid"],
        ["TE-26-0418", "Report of thorough examination (LOLER)", "06 May 2026", "Superseded"],
        ["DoC-25-0417", "Manufacturer's Declaration of Conformity", "28 Oct 2025", "Valid"]
      ],
      spares: [],
      procedures: [
        ["UP-LE-001", "Lifting accessory pre-use check", "Rev 5"],
        ["UP-LE-010", "Textile slings: use, storage & discard criteria", "Rev 2"],
        ["UP-QA-005", "Quarantine & non-conformance handling", "Rev 2"]
      ]
    }
  },
  "Q9WL4C": {
    equip: "2-1/16\" 5,000 psi Choke Valve",
    tagId: "Q9WL4C", serial: "CV-5K-02261",
    status: "bad", statusText: "DO NOT USE · QUARANTINED", statusSub: "Failed body test 03 Nov 2026 · awaiting assessment",
    fields: [["Size / rating", "2-1/16\" 5K"], ["Specification", "API 6A, PSL 2"],
             ["Last certified", "Mar 2023"], ["Certificate", "Withdrawn"]],
    photo: null,
    mrp: {
      workorders: [["WO-26-3488", "21 Oct 2026", "Refurbish and re-certify", "On hold"]],
      history: [
        ["03 Nov 2026", "Body test failed (weep at 4,200 psi). Quarantined", "Test bay 1"],
        ["21 Oct 2026", "Received from offshore, tagged Q9WL4C", "Goods in"]
      ],
      certs: [["NCR-26-077", "Non-conformance report", "03 Nov 2026", "Open"]],
      spares: [],
      procedures: [["UP-QA-005", "Quarantine & non-conformance handling", "Rev 2"]]
    }
  },
  "VFHRDH": {
    equip: "Wellhead Crossover, 3-1/2\" EUE Box x 2-7/8\" EUE Pin",
    tagId: "VFHRDH", serial: "CR5749",
    status: "ok", statusText: "CERTIFIED · READY TO SHIP", statusSub: "Packed for dispatch · certificate valid until 06 Nov 2027",
    fields: [["Type", "Threaded crossover"], ["Connections", "3-1/2\" EUE box x 2-7/8\" EUE pin"],
             ["Working pressure", "5,000 psi"], ["Specification", "API 6A, PSL 2"],
             ["Material class", "AA"], ["Temp. class", "P-U"],
             ["Weight", "38 kg"], ["Pressure tested", "06 Nov 2026"],
             ["Certificate no.", "CoC-26-1207", true]],
    photo: "img/crossover-VFHRDH.jpg", photoCaption: "Packed on pallet for dispatch, 11 Nov 2026",
    mrp: {
      workorders: [
        ["WO-26-3544", "29 Oct 2026", "Inspect, re-thread check, test, re-certify", "Closed"],
        ["WO-24-2210", "14 Aug 2024", "Re-certification", "Closed"]
      ],
      history: [
        ["11 Nov 2026", "Wrapped, strapped to pallet, thread protectors fitted", "Despatch"],
        ["07 Nov 2026", "Painted (Unity blue), serial and weight stencilled", "Paint shop"],
        ["06 Nov 2026", "Hydrostatic body test passed, CoC-26-1207 issued", "Test bay 2"],
        ["03 Nov 2026", "Threads gauged (box and pin): within tolerance", "QC"],
        ["31 Oct 2026", "Cleaned and inspected, MPI on body: no defects", "Bay 3"],
        ["29 Oct 2026", "Received from client, tagged VFHRDH", "Goods in"]
      ],
      certs: [
        ["CoC-26-1207", "Certificate of Conformance", "06 Nov 2026", "Valid"],
        ["PT-26-1207", "Pressure test certificate", "06 Nov 2026", "Pass"],
        ["TG-26-1207", "Thread gauge report", "03 Nov 2026", "Pass"],
        ["CoC-24-0893", "Certificate of Conformance", "21 Aug 2024", "Expired"]
      ],
      spares: [
        ["TP-312-EUE", "Thread protector, 3-1/2\" EUE box", "1 used", "22 in stock"],
        ["TP-278-EUE", "Thread protector, 2-7/8\" EUE pin", "1 used", "17 in stock"]
      ],
      procedures: [
        ["UP-XO-030", "Crossover inspection & thread gauging", "Rev 3"],
        ["UP-PT-200", "Hydrostatic body & seat testing (API 6A)", "Rev 9"],
        ["UP-DS-015", "Packing & dispatch of wellhead components", "Rev 4"]
      ]
    }
  },
  "RPCYXU": {
    equip: "High Pressure Hydraulic Hose, 3/8\" Pioneer Male x 3/8\" Pioneer Female",
    tagId: "RPCYXU", serial: "HH-38-02175",
    status: "ok", statusText: "TESTED · OK TO USE", statusSub: "Proof tested 05 Nov 2026 · replace by Nov 2031",
    fields: [["Hose", "2-wire braid, EN 853 2SN"], ["Bore", "3/8\" (DN10)"],
             ["End A", "3/8\" Pioneer male (tip)"], ["End B", "3/8\" Pioneer female (coupler)"],
             ["Working pressure", "330 bar (4,785 psi)"], ["Proof tested", "660 bar, 05 Nov 2026"],
             ["Length", "2.0 m"], ["Made up", "Nov 2026"],
             ["Test certificate", "HT-26-0388", true]],
    photo: null, photoCaption: "",
    mrp: {
      workorders: [
        ["WO-26-3571", "04 Nov 2026", "Make up hose assembly, proof test, tag", "Closed"]
      ],
      history: [
        ["06 Nov 2026", "Issued to Bay 2 test rig", "Hose store"],
        ["05 Nov 2026", "Proof test 660 bar, 2 min hold: no leaks. Certificate HT-26-0388", "Test bay 1"],
        ["04 Nov 2026", "Hose cut, cleaned, couplings crimped (crimp dia. checked)", "Hose shop"],
        ["04 Nov 2026", "Assembly registered, tagged RPCYXU", "Hose shop"]
      ],
      certs: [
        ["HT-26-0388", "Hose assembly proof test certificate", "05 Nov 2026", "Pass"],
        ["MC-26-1140", "Hose manufacturer's certificate of conformity", "12 Sep 2026", "Valid"]
      ],
      spares: [
        ["HS-2SN-06", "Hose, 3/8\" EN 853 2SN (m)", "2.0 used", "48 m in stock"],
        ["PC-38-M", "Pioneer coupling 3/8\" male tip", "1 used", "14 in stock"],
        ["PC-38-F", "Pioneer coupling 3/8\" female", "1 used", "9 in stock"],
        ["DC-38-PI", "Dust caps, 3/8\" Pioneer (pair)", "1 used", "30 in stock"]
      ],
      procedures: [
        ["UP-HY-020", "Hydraulic hose assembly make-up & crimping", "Rev 6"],
        ["UP-HY-025", "Hose assembly proof testing", "Rev 4"],
        ["UP-HY-030", "Hose inspection & replacement criteria", "Rev 2"]
      ]
    }
  }
};
