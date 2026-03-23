# GlobeEurope


```text
fontawesome/Solid/GlobeEurope
```

```text
include('fontawesome/Solid/GlobeEurope')
```



| Illustration | GlobeEurope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlobeEurope.png) | ![illustration for GlobeEurope](../../fontawesome/Solid/GlobeEurope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlobeEuropeXs>`
- `<$GlobeEuropeSm>`
- `<$GlobeEuropeMd>`
- `<$GlobeEuropeLg>`





## GlobeEurope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlobeEurope
include('fontawesome/Solid/GlobeEurope')

' renders the element
GlobeEurope('GlobeEurope', 'Globe Europe', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlobeEurope
include('fontawesome/Solid/GlobeEurope')

' renders the element
GlobeEurope('GlobeEurope', 'Globe Europe', 'an optional tech label', 'an optional description')
@enduml
```

