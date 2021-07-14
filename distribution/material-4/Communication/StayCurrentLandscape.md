# StayCurrentLandscape


```text
material-4/Communication/StayCurrentLandscape
```

```text
include('material-4/Communication/StayCurrentLandscape')
```



| Illustration | StayCurrentLandscape |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/StayCurrentLandscape.png) | ![illustration for StayCurrentLandscape](../../material-4/Communication/StayCurrentLandscape.Local.png) |




## StayCurrentLandscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StayCurrentLandscape
include('material-4/Communication/StayCurrentLandscape')

' renders the element
StayCurrentLandscape('StayCurrentLandscape', 'Stay Current Landscape', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element StayCurrentLandscape
include('material-4/Communication/StayCurrentLandscape')

' renders the element
StayCurrentLandscape('StayCurrentLandscape', 'Stay Current Landscape', 'an optional tech label')
@enduml
```

