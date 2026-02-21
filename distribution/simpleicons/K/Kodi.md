# Kodi


```text
simpleicons/K/Kodi
```

```text
include('simpleicons/K/Kodi')
```



| Illustration | Kodi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kodi.png) | ![illustration for Kodi](../../simpleicons/K/Kodi.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kodi
include('simpleicons/K/Kodi')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kodi
include('simpleicons/K/Kodi')

' renders the element
Kodi('Kodi', 'Kodi', 'an optional tech label', 'an optional description')
@enduml
```

