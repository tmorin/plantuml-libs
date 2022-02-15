# EarthEurope


```text
fontawesome-6/Solid/EarthEurope
```

```text
include('fontawesome-6/Solid/EarthEurope')
```



| Illustration | EarthEurope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EarthEurope.png) | ![illustration for EarthEurope](../../fontawesome-6/Solid/EarthEurope.Local.png) |




## EarthEurope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EarthEurope
include('fontawesome-6/Solid/EarthEurope')

' renders the element
EarthEurope('EarthEurope', 'Earth Europe', 'an optional tech label')
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

' loads the Item which embeds the element EarthEurope
include('fontawesome-6/Solid/EarthEurope')

' renders the element
EarthEurope('EarthEurope', 'Earth Europe', 'an optional tech label')
@enduml
```

