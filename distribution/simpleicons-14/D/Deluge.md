# Deluge


```text
simpleicons-14/D/Deluge
```

```text
include('simpleicons-14/D/Deluge')
```



| Illustration | Deluge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deluge.png) | ![illustration for Deluge](../../simpleicons-14/D/Deluge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DelugeXs>`
- `<$DelugeSm>`
- `<$DelugeMd>`
- `<$DelugeLg>`





## Deluge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deluge
include('simpleicons-14/D/Deluge')

' renders the element
Deluge('Deluge', 'Deluge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deluge
include('simpleicons-14/D/Deluge')

' renders the element
Deluge('Deluge', 'Deluge', 'an optional tech label', 'an optional description')
@enduml
```

