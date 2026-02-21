# Session


```text
simpleicons-14/S/Session
```

```text
include('simpleicons-14/S/Session')
```



| Illustration | Session |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Session.png) | ![illustration for Session](../../simpleicons-14/S/Session.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SessionXs>`
- `<$SessionSm>`
- `<$SessionMd>`
- `<$SessionLg>`





## Session

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Session
include('simpleicons-14/S/Session')

' renders the element
Session('Session', 'Session', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Session
include('simpleicons-14/S/Session')

' renders the element
Session('Session', 'Session', 'an optional tech label', 'an optional description')
@enduml
```

