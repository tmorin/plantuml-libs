# PrescriptionBottleAlt


```text
fontawesome-5/Solid/PrescriptionBottleAlt
```

```text
include('fontawesome-5/Solid/PrescriptionBottleAlt')
```



| Illustration | PrescriptionBottleAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PrescriptionBottleAlt.png) | ![illustration for PrescriptionBottleAlt](../../fontawesome-5/Solid/PrescriptionBottleAlt.Local.png) |




## PrescriptionBottleAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PrescriptionBottleAlt
include('fontawesome-5/Solid/PrescriptionBottleAlt')

' renders the element
PrescriptionBottleAlt('PrescriptionBottleAlt', 'Prescription Bottle Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PrescriptionBottleAlt
include('fontawesome-5/Solid/PrescriptionBottleAlt')

' renders the element
PrescriptionBottleAlt('PrescriptionBottleAlt', 'Prescription Bottle Alt', 'an optional tech label')
@enduml
```

