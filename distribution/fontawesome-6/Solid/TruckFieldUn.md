# TruckFieldUn


```text
fontawesome-6/Solid/TruckFieldUn
```

```text
include('fontawesome-6/Solid/TruckFieldUn')
```



| Illustration | TruckFieldUn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckFieldUn.png) | ![illustration for TruckFieldUn](../../fontawesome-6/Solid/TruckFieldUn.Local.png) |




## TruckFieldUn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckFieldUn
include('fontawesome-6/Solid/TruckFieldUn')

' renders the element
TruckFieldUn('TruckFieldUn', 'Truck Field Un', 'an optional tech label')
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

' loads the Item which embeds the element TruckFieldUn
include('fontawesome-6/Solid/TruckFieldUn')

' renders the element
TruckFieldUn('TruckFieldUn', 'Truck Field Un', 'an optional tech label')
@enduml
```

