# Stremio


```text
simpleicons-14/S/Stremio
```

```text
include('simpleicons-14/S/Stremio')
```



| Illustration | Stremio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stremio.png) | ![illustration for Stremio](../../simpleicons-14/S/Stremio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StremioXs>`
- `<$StremioSm>`
- `<$StremioMd>`
- `<$StremioLg>`





## Stremio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stremio
include('simpleicons-14/S/Stremio')

' renders the element
Stremio('Stremio', 'Stremio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stremio
include('simpleicons-14/S/Stremio')

' renders the element
Stremio('Stremio', 'Stremio', 'an optional tech label', 'an optional description')
@enduml
```

