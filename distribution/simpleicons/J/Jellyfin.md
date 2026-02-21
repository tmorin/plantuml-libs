# Jellyfin


```text
simpleicons/J/Jellyfin
```

```text
include('simpleicons/J/Jellyfin')
```



| Illustration | Jellyfin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jellyfin.png) | ![illustration for Jellyfin](../../simpleicons/J/Jellyfin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JellyfinXs>`
- `<$JellyfinSm>`
- `<$JellyfinMd>`
- `<$JellyfinLg>`





## Jellyfin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jellyfin
include('simpleicons/J/Jellyfin')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jellyfin
include('simpleicons/J/Jellyfin')

' renders the element
Jellyfin('Jellyfin', 'Jellyfin', 'an optional tech label', 'an optional description')
@enduml
```

