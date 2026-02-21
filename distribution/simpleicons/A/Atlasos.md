# Atlasos


```text
simpleicons/A/Atlasos
```

```text
include('simpleicons/A/Atlasos')
```



| Illustration | Atlasos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Atlasos.png) | ![illustration for Atlasos](../../simpleicons/A/Atlasos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtlasosXs>`
- `<$AtlasosSm>`
- `<$AtlasosMd>`
- `<$AtlasosLg>`





## Atlasos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Atlasos
include('simpleicons/A/Atlasos')

' renders the element
Atlasos('Atlasos', 'Atlasos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atlasos
include('simpleicons/A/Atlasos')

' renders the element
Atlasos('Atlasos', 'Atlasos', 'an optional tech label', 'an optional description')
@enduml
```

