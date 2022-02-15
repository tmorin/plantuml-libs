# TruckMedical


```text
fontawesome-6/Solid/TruckMedical
```

```text
include('fontawesome-6/Solid/TruckMedical')
```



| Illustration | TruckMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckMedical.png) | ![illustration for TruckMedical](../../fontawesome-6/Solid/TruckMedical.Local.png) |




## TruckMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckMedical
include('fontawesome-6/Solid/TruckMedical')

' renders the element
TruckMedical('TruckMedical', 'Truck Medical', 'an optional tech label')
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

' loads the Item which embeds the element TruckMedical
include('fontawesome-6/Solid/TruckMedical')

' renders the element
TruckMedical('TruckMedical', 'Truck Medical', 'an optional tech label')
@enduml
```

