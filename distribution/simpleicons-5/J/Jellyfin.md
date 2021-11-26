# Jellyfin


```text
simpleicons-5/J/Jellyfin
```

```text
include('simpleicons-5/J/Jellyfin')
```



| Illustration | Jellyfin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jellyfin.png) | ![illustration for Jellyfin](../../simpleicons-5/J/Jellyfin.Local.png) |




## Jellyfin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jellyfin
include('simpleicons-5/J/Jellyfin')

' renders the element
Jellyfin('Jellyfin', 'Jellyfin', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jellyfin
include('simpleicons-5/J/Jellyfin')

' renders the element
Jellyfin('Jellyfin', 'Jellyfin', 'an optional tech label')
@enduml
```

