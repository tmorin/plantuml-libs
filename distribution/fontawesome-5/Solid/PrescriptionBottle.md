# PrescriptionBottle


```text
fontawesome-5/Solid/PrescriptionBottle
```

```text
include('fontawesome-5/Solid/PrescriptionBottle')
```



| Illustration | PrescriptionBottle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PrescriptionBottle.png) | ![illustration for PrescriptionBottle](../../fontawesome-5/Solid/PrescriptionBottle.Local.png) |




## PrescriptionBottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PrescriptionBottle
include('fontawesome-5/Solid/PrescriptionBottle')

' renders the element
PrescriptionBottle('PrescriptionBottle', 'Prescription Bottle', 'an optional tech label')
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

' loads the Item which embeds the element PrescriptionBottle
include('fontawesome-5/Solid/PrescriptionBottle')

' renders the element
PrescriptionBottle('PrescriptionBottle', 'Prescription Bottle', 'an optional tech label')
@enduml
```

