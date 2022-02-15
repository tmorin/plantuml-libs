# Truck


```text
fontawesome-6/Solid/Truck
```

```text
include('fontawesome-6/Solid/Truck')
```



| Illustration | Truck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Truck.png) | ![illustration for Truck](../../fontawesome-6/Solid/Truck.Local.png) |




## Truck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Truck
include('fontawesome-6/Solid/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label')
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

' loads the Item which embeds the element Truck
include('fontawesome-6/Solid/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label')
@enduml
```

