export class FHIRClaim {
    public static claim: any = 
       
    {
            "resourceType": "Claim",
            "id": "100150",
            "text": {
                "status": "generated",
                "div": "\u003cdiv xmlns\u003d\"http://www.w3.org/1999/xhtml\"\u003eA human-readable rendering of the Oral Health Claim\u003c/div\u003e"
            },
            "identifier": [
                {
                    "system": "http://happyvalley.com/claim",
                    "value": "12345"
                }
            ],
            "status": "active",
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/claim-type",
                        "code": "oral"
                    }
                ]
            },
            "use": "claim",
            "patient": {
                "reference": "Patient/4"
            },
            "created": "2014-08-16",
            "insurer": {
                "reference": "Organization/2"
            },
            "provider": {
                "reference": "Organization/1"
            },
            "priority": {
                "coding": [
                    {
                        "code": "normal"
                    }
                ]
            },
            "payee": {
                "type": {
                    "coding": [
                        {
                            "code": "provider"
                        }
                    ]
                }
            },
            "careTeam": [
                {
                    "sequence": 1,
                    "provider": {
                        "reference": "Practitioner/5"
                    }
                }
            ],
            "diagnosis": [
                {
                    "sequence": 1,
                    "diagnosisCodeableConcept": {
                        "coding": [
                            {
                                "code": "123456"
                            }
                        ]
                    }
                }
            ],
            "insurance": [
                {
                    "sequence": 1,
                    "focal": true,
                    "identifier": {
                        "system": "http://happyvalley.com/claim",
                        "value": "12345"
                    },
                    "coverage": {
                        "reference": "Coverage/9876B1"
                    }
                }
            ],
            "item": [
                {
                    "sequence": 1,
                    "careTeamSequence": [
                        1
                    ],
                    "productOrService": {
                        "coding": [
                            {
                                "code": "1200"
                            }
                        ]
                    },
                    "servicedDate": "2014-08-16",
                    "unitPrice": {
                        "value": 135.57,
                        "currency": "USD"
                    },
                    "net": {
                        "value": 135.57,
                        "currency": "USD"
                    }
                }
            ],
            "meta": {
                "tag": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                        "code": "HTEST",
                        "display": "test health data"
                    }
                ]
            }
        } ;
    private constructor() { }
}


