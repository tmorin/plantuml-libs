# Keepachangelog


```text
simpleicons-8/K/Keepachangelog
```

```text
include('simpleicons-8/K/Keepachangelog')
```



| Illustration | Keepachangelog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Keepachangelog.png) | ![illustration for Keepachangelog](../../simpleicons-8/K/Keepachangelog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeepachangelogXs>`
- `<$KeepachangelogSm>`
- `<$KeepachangelogMd>`
- `<$KeepachangelogLg>`





## Keepachangelog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Keepachangelog
include('simpleicons-8/K/Keepachangelog')

' renders the element
Keepachangelog('Keepachangelog', 'Keepachangelog', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Keepachangelog
include('simpleicons-8/K/Keepachangelog')

' renders the element
Keepachangelog('Keepachangelog', 'Keepachangelog', 'an optional tech label', 'an optional description')
@enduml
```

