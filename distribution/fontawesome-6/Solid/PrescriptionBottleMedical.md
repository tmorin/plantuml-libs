# PrescriptionBottleMedical


```text
fontawesome-6/Solid/PrescriptionBottleMedical
```

```text
include('fontawesome-6/Solid/PrescriptionBottleMedical')
```



| Illustration | PrescriptionBottleMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PrescriptionBottleMedical.png) | ![illustration for PrescriptionBottleMedical](../../fontawesome-6/Solid/PrescriptionBottleMedical.Local.png) |




## PrescriptionBottleMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PrescriptionBottleMedical
include('fontawesome-6/Solid/PrescriptionBottleMedical')

' renders the element
PrescriptionBottleMedical('PrescriptionBottleMedical', 'Prescription Bottle Medical', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PrescriptionBottleMedical
include('fontawesome-6/Solid/PrescriptionBottleMedical')

' renders the element
PrescriptionBottleMedical('PrescriptionBottleMedical', 'Prescription Bottle Medical', 'an optional tech label')
@enduml
```

