# PrescriptionBottleMedical


```text
fontawesome/Solid/PrescriptionBottleMedical
```

```text
include('fontawesome/Solid/PrescriptionBottleMedical')
```



| Illustration | PrescriptionBottleMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PrescriptionBottleMedical.png) | ![illustration for PrescriptionBottleMedical](../../fontawesome/Solid/PrescriptionBottleMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrescriptionBottleMedicalXs>`
- `<$PrescriptionBottleMedicalSm>`
- `<$PrescriptionBottleMedicalMd>`
- `<$PrescriptionBottleMedicalLg>`





## PrescriptionBottleMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PrescriptionBottleMedical
include('fontawesome/Solid/PrescriptionBottleMedical')

' renders the element
PrescriptionBottleMedical('PrescriptionBottleMedical', 'Prescription Bottle Medical', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PrescriptionBottleMedical
include('fontawesome/Solid/PrescriptionBottleMedical')

' renders the element
PrescriptionBottleMedical('PrescriptionBottleMedical', 'Prescription Bottle Medical', 'an optional tech label', 'an optional description')
@enduml
```

