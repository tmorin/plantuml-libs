# Jellyfin


```text
simpleicons-7/J/Jellyfin
```

```text
include('simpleicons-7/J/Jellyfin')
```



| Illustration | Jellyfin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jellyfin.png) | ![illustration for Jellyfin](../../simpleicons-7/J/Jellyfin.Local.png) |




## Jellyfin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jellyfin
include('simpleicons-7/J/Jellyfin')

' renders the element
Jellyfin('Jellyfin', 'Jellyfin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jellyfin
include('simpleicons-7/J/Jellyfin')

' renders the element
Jellyfin('Jellyfin', 'Jellyfin', 'an optional tech label', 'an optional description')
@enduml
```

