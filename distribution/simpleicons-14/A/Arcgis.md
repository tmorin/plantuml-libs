# Arcgis


```text
simpleicons-14/A/Arcgis
```

```text
include('simpleicons-14/A/Arcgis')
```



| Illustration | Arcgis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Arcgis.png) | ![illustration for Arcgis](../../simpleicons-14/A/Arcgis.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arcgis
include('simpleicons-14/A/Arcgis')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arcgis
include('simpleicons-14/A/Arcgis')

' renders the element
Arcgis('Arcgis', 'Arcgis', 'an optional tech label', 'an optional description')
@enduml
```

