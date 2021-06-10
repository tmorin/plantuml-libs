# TruckLoading


```text
fontawesome-5/Solid/TruckLoading
```

```text
include('fontawesome-5/Solid/TruckLoading')
```



| Illustration | TruckLoading |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TruckLoading.png) | ![illustration for TruckLoading](../../fontawesome-5/Solid/TruckLoading.Local.png) |




## TruckLoading

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TruckLoading
include('fontawesome-5/Solid/TruckLoading')

' renders the element
TruckLoading('TruckLoading', 'Truck Loading', 'an optional tech label')
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

' loads the Item which embeds the element TruckLoading
include('fontawesome-5/Solid/TruckLoading')

' renders the element
TruckLoading('TruckLoading', 'Truck Loading', 'an optional tech label')
@enduml
```

