# Museum


```text
material/Maps/Museum
```

```text
include('material/Maps/Museum')
```



| Illustration | Museum |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Museum.png) | ![illustration for Museum](../../material/Maps/Museum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MuseumXs>`
- `<$MuseumSm>`
- `<$MuseumMd>`
- `<$MuseumLg>`





## Museum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Museum
include('material/Maps/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Museum
include('material/Maps/Museum')

' renders the element
Museum('Museum', 'Museum', 'an optional tech label', 'an optional description')
@enduml
```

