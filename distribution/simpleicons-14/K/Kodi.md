# Kodi


```text
simpleicons-14/K/Kodi
```

```text
include('simpleicons-14/K/Kodi')
```



| Illustration | Kodi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kodi.png) | ![illustration for Kodi](../../simpleicons-14/K/Kodi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KodiXs>`
- `<$KodiSm>`
- `<$KodiMd>`
- `<$KodiLg>`





## Kodi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kodi
include('simpleicons-14/K/Kodi')

' renders the element
Kodi('Kodi', 'Kodi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kodi
include('simpleicons-14/K/Kodi')

' renders the element
Kodi('Kodi', 'Kodi', 'an optional tech label', 'an optional description')
@enduml
```

