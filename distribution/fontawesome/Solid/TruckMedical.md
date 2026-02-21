# TruckMedical


```text
fontawesome/Solid/TruckMedical
```

```text
include('fontawesome/Solid/TruckMedical')
```



| Illustration | TruckMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TruckMedical.png) | ![illustration for TruckMedical](../../fontawesome/Solid/TruckMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckMedicalXs>`
- `<$TruckMedicalSm>`
- `<$TruckMedicalMd>`
- `<$TruckMedicalLg>`





## TruckMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TruckMedical
include('fontawesome/Solid/TruckMedical')

' renders the element
TruckMedical('TruckMedical', 'Truck Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckMedical
include('fontawesome/Solid/TruckMedical')

' renders the element
TruckMedical('TruckMedical', 'Truck Medical', 'an optional tech label', 'an optional description')
@enduml
```

