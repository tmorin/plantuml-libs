# Arcgis


```text
simpleicons/A/Arcgis
```

```text
include('simpleicons/A/Arcgis')
```



| Illustration | Arcgis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Arcgis.png) | ![illustration for Arcgis](../../simpleicons/A/Arcgis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArcgisXs>`
- `<$ArcgisSm>`
- `<$ArcgisMd>`
- `<$ArcgisLg>`





## Arcgis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Arcgis
include('simpleicons/A/Arcgis')

' renders the element
Arcgis('Arcgis', 'Arcgis', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Arcgis
include('simpleicons/A/Arcgis')

' renders the element
Arcgis('Arcgis', 'Arcgis', 'an optional tech label', 'an optional description')
@enduml
```

