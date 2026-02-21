# StayPrimaryLandscape


```text
material/Communication/StayPrimaryLandscape
```

```text
include('material/Communication/StayPrimaryLandscape')
```



| Illustration | StayPrimaryLandscape |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/StayPrimaryLandscape.png) | ![illustration for StayPrimaryLandscape](../../material/Communication/StayPrimaryLandscape.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StayPrimaryLandscapeXs>`
- `<$StayPrimaryLandscapeSm>`
- `<$StayPrimaryLandscapeMd>`
- `<$StayPrimaryLandscapeLg>`





## StayPrimaryLandscape

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element StayPrimaryLandscape
include('material/Communication/StayPrimaryLandscape')

' renders the element
StayPrimaryLandscape('StayPrimaryLandscape', 'Stay Primary Landscape', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StayPrimaryLandscape
include('material/Communication/StayPrimaryLandscape')

' renders the element
StayPrimaryLandscape('StayPrimaryLandscape', 'Stay Primary Landscape', 'an optional tech label', 'an optional description')
@enduml
```

