# GlobeEurope


```text
fontawesome-5/Solid/GlobeEurope
```

```text
include('fontawesome-5/Solid/GlobeEurope')
```



| Illustration | GlobeEurope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlobeEurope.png) | ![illustration for GlobeEurope](../../fontawesome-5/Solid/GlobeEurope.Local.png) |




## GlobeEurope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlobeEurope
include('fontawesome-5/Solid/GlobeEurope')

' renders the element
GlobeEurope('GlobeEurope', 'Globe Europe', 'an optional tech label')
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

' loads the Item which embeds the element GlobeEurope
include('fontawesome-5/Solid/GlobeEurope')

' renders the element
GlobeEurope('GlobeEurope', 'Globe Europe', 'an optional tech label')
@enduml
```

