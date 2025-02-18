# Tidal


```text
simpleicons-14/T/Tidal
```

```text
include('simpleicons-14/T/Tidal')
```



| Illustration | Tidal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tidal.png) | ![illustration for Tidal](../../simpleicons-14/T/Tidal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TidalXs>`
- `<$TidalSm>`
- `<$TidalMd>`
- `<$TidalLg>`





## Tidal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tidal
include('simpleicons-14/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tidal
include('simpleicons-14/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label', 'an optional description')
@enduml
```

