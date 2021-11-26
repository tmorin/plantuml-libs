# Plex


```text
simpleicons-5/P/Plex
```

```text
include('simpleicons-5/P/Plex')
```



| Illustration | Plex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Plex.png) | ![illustration for Plex](../../simpleicons-5/P/Plex.Local.png) |




## Plex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Plex
include('simpleicons-5/P/Plex')

' renders the element
Plex('Plex', 'Plex', 'an optional tech label')
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

' loads the Item which embeds the element Plex
include('simpleicons-5/P/Plex')

' renders the element
Plex('Plex', 'Plex', 'an optional tech label')
@enduml
```

