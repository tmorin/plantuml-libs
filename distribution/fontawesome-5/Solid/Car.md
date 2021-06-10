# Car


```text
fontawesome-5/Solid/Car
```

```text
include('fontawesome-5/Solid/Car')
```



| Illustration | Car |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Car.png) | ![illustration for Car](../../fontawesome-5/Solid/Car.Local.png) |




## Car

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Car
include('fontawesome-5/Solid/Car')

' renders the element
Car('Car', 'Car', 'an optional tech label')
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

' loads the Item which embeds the element Car
include('fontawesome-5/Solid/Car')

' renders the element
Car('Car', 'Car', 'an optional tech label')
@enduml
```

