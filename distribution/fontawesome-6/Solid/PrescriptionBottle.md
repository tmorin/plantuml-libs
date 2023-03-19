# PrescriptionBottle


```text
fontawesome-6/Solid/PrescriptionBottle
```

```text
include('fontawesome-6/Solid/PrescriptionBottle')
```



| Illustration | PrescriptionBottle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PrescriptionBottle.png) | ![illustration for PrescriptionBottle](../../fontawesome-6/Solid/PrescriptionBottle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrescriptionBottleXs>`
- `<$PrescriptionBottleSm>`
- `<$PrescriptionBottleMd>`
- `<$PrescriptionBottleLg>`





## PrescriptionBottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PrescriptionBottle
include('fontawesome-6/Solid/PrescriptionBottle')

' renders the element
PrescriptionBottle('PrescriptionBottle', 'Prescription Bottle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PrescriptionBottle
include('fontawesome-6/Solid/PrescriptionBottle')

' renders the element
PrescriptionBottle('PrescriptionBottle', 'Prescription Bottle', 'an optional tech label', 'an optional description')
@enduml
```

