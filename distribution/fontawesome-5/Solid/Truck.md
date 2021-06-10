# Truck


```text
fontawesome-5/Solid/Truck
```

```text
include('fontawesome-5/Solid/Truck')
```



| Illustration | Truck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Truck.png) | ![illustration for Truck](../../fontawesome-5/Solid/Truck.Local.png) |




## Truck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Truck
include('fontawesome-5/Solid/Truck')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Truck
include('fontawesome-5/Solid/Truck')

' renders the element
Truck('Truck', 'Truck', 'an optional tech label')
@enduml
```

