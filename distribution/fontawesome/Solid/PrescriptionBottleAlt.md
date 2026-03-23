# PrescriptionBottleAlt


```text
fontawesome/Solid/PrescriptionBottleAlt
```

```text
include('fontawesome/Solid/PrescriptionBottleAlt')
```



| Illustration | PrescriptionBottleAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PrescriptionBottleAlt.png) | ![illustration for PrescriptionBottleAlt](../../fontawesome/Solid/PrescriptionBottleAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrescriptionBottleAltXs>`
- `<$PrescriptionBottleAltSm>`
- `<$PrescriptionBottleAltMd>`
- `<$PrescriptionBottleAltLg>`





## PrescriptionBottleAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PrescriptionBottleAlt
include('fontawesome/Solid/PrescriptionBottleAlt')

' renders the element
PrescriptionBottleAlt('PrescriptionBottleAlt', 'Prescription Bottle Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PrescriptionBottleAlt
include('fontawesome/Solid/PrescriptionBottleAlt')

' renders the element
PrescriptionBottleAlt('PrescriptionBottleAlt', 'Prescription Bottle Alt', 'an optional tech label', 'an optional description')
@enduml
```

