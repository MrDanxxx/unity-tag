// SAMPLE DATA ONLY (demo).
// In the real system both pages would fetch this from Unity's server:
// the public fields for anyone, the MRP tabs only after sign-in.
// Photos: Wikimedia Commons placeholders (credited in index.html footer) until real workshop photos arrive.
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
    equip: "2-9/16\" 5,000 psi Dual Completion Xmas Tree",
    tagId: "M2X8TD", serial: "XT-5K-11302",
    status: "wip", statusText: "IN WORKSHOP", statusSub: "Currently: painting · expected out w/c 24 Nov 2026",
    fields: [["Size / rating", "2-9/16\" 5K"], ["Specification", "API 6A, PSL 2"],
             ["Temp. class", "L-U"], ["Material class", "DD-NL"],
             ["Previous cert.", "Expired Jun 2026"], ["Received", "28 Oct 2026"]],
    photo: "img/tree-green.jpg", photoCaption: "Photographed on arrival, 28 Oct 2026",
    mrp: {
      workorders: [
        ["WO-26-3517", "28 Oct 2026", "Strip, refurbish, re-certify", "Open"],
        ["WO-22-0954", "11 May 2022", "Re-certification", "Closed"]
      ],
      history: [
        ["10 Nov 2026", "Moved to paint shop", "Paint shop"],
        ["05 Nov 2026", "Blasted, NDT: minor pitting on flange face, within limits", "Blast shop"],
        ["31 Oct 2026", "Stripped and inspected, 2 wing valves need new seats", "Bay 2"],
        ["28 Oct 2026", "Received from offshore, tagged M2X8TD", "Goods in"]
      ],
      certs: [
        ["CoC-22-0711", "Certificate of Conformance", "18 May 2022", "Expired"]
      ],
      spares: [
        ["GSK-2916-5K", "Gate & seat kit, 2-9/16\" 5K", "2 reserved", "3 in stock"],
        ["RX-27", "Ring gasket RX-27", "6 reserved", "30 in stock"]
      ],
      procedures: [
        ["UP-WH-101", "Xmas tree strip & inspection", "Rev 7"],
        ["UP-PA-010", "Surface prep & coating spec P-3", "Rev 3"]
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
  }
};
