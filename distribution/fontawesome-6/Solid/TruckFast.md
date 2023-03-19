# TruckFast


```text
fontawesome-6/Solid/TruckFast
```

```text
include('fontawesome-6/Solid/TruckFast')
```



| Illustration | TruckFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckFast.png) | ![illustration for TruckFast](../../fontawesome-6/Solid/TruckFast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TruckFastXs>`
- `<$TruckFastSm>`
- `<$TruckFastMd>`
- `<$TruckFastLg>`





## TruckFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckFast
include('fontawesome-6/Solid/TruckFast')

' renders the element
TruckFast('TruckFast', 'Truck Fast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TruckFast
include('fontawesome-6/Solid/TruckFast')

' renders the element
TruckFast('TruckFast', 'Truck Fast', 'an optional tech label', 'an optional description')
@enduml
```

