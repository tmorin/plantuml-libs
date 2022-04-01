# TruckField


```text
fontawesome-6/Solid/TruckField
```

```text
include('fontawesome-6/Solid/TruckField')
```



| Illustration | TruckField |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TruckField.png) | ![illustration for TruckField](../../fontawesome-6/Solid/TruckField.Local.png) |




## TruckField

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TruckField
include('fontawesome-6/Solid/TruckField')

' renders the element
TruckField('TruckField', 'Truck Field', 'an optional tech label')
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

' loads the Item which embeds the element TruckField
include('fontawesome-6/Solid/TruckField')

' renders the element
TruckField('TruckField', 'Truck Field', 'an optional tech label')
@enduml
```

