# Syncthing


```text
simpleicons-14/S/Syncthing
```

```text
include('simpleicons-14/S/Syncthing')
```



| Illustration | Syncthing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Syncthing.png) | ![illustration for Syncthing](../../simpleicons-14/S/Syncthing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SyncthingXs>`
- `<$SyncthingSm>`
- `<$SyncthingMd>`
- `<$SyncthingLg>`





## Syncthing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Syncthing
include('simpleicons-14/S/Syncthing')

' renders the element
Syncthing('Syncthing', 'Syncthing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Syncthing
include('simpleicons-14/S/Syncthing')

' renders the element
Syncthing('Syncthing', 'Syncthing', 'an optional tech label', 'an optional description')
@enduml
```

