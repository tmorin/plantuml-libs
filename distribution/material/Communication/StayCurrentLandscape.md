# StayCurrentLandscape


```text
material/Communication/StayCurrentLandscape
```

```text
include('material/Communication/StayCurrentLandscape')
```



| Illustration | StayCurrentLandscape |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/StayCurrentLandscape.png) | ![illustration for StayCurrentLandscape](../../material/Communication/StayCurrentLandscape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StayCurrentLandscapeXs>`
- `<$StayCurrentLandscapeSm>`
- `<$StayCurrentLandscapeMd>`
- `<$StayCurrentLandscapeLg>`





## StayCurrentLandscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StayCurrentLandscape
include('material/Communication/StayCurrentLandscape')

' renders the element
StayCurrentLandscape('StayCurrentLandscape', 'Stay Current Landscape', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element StayCurrentLandscape
include('material/Communication/StayCurrentLandscape')

' renders the element
StayCurrentLandscape('StayCurrentLandscape', 'Stay Current Landscape', 'an optional tech label', 'an optional description')
@enduml
```

