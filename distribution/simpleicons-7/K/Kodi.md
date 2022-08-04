# Kodi


```text
simpleicons-7/K/Kodi
```

```text
include('simpleicons-7/K/Kodi')
```



| Illustration | Kodi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kodi.png) | ![illustration for Kodi](../../simpleicons-7/K/Kodi.Local.png) |




## Kodi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kodi
include('simpleicons-7/K/Kodi')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kodi
include('simpleicons-7/K/Kodi')

' renders the element
Kodi('Kodi', 'Kodi', 'an optional tech label', 'an optional description')
@enduml
```

