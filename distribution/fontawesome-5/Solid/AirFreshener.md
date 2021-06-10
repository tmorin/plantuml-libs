# AirFreshener


```text
fontawesome-5/Solid/AirFreshener
```

```text
include('fontawesome-5/Solid/AirFreshener')
```



| Illustration | AirFreshener |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/AirFreshener.png) | ![illustration for AirFreshener](../../fontawesome-5/Solid/AirFreshener.Local.png) |




## AirFreshener

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AirFreshener
include('fontawesome-5/Solid/AirFreshener')

' renders the element
AirFreshener('AirFreshener', 'Air Freshener', 'an optional tech label')
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

' loads the Item which embeds the element AirFreshener
include('fontawesome-5/Solid/AirFreshener')

' renders the element
AirFreshener('AirFreshener', 'Air Freshener', 'an optional tech label')
@enduml
```

