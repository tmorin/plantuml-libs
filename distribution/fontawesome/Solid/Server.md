# Server


```text
fontawesome/Solid/Server
```

```text
include('fontawesome/Solid/Server')
```



| Illustration | Server |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Server.png) | ![illustration for Server](../../fontawesome/Solid/Server.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServerXs>`
- `<$ServerSm>`
- `<$ServerMd>`
- `<$ServerLg>`





## Server

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Server
include('fontawesome/Solid/Server')

' renders the element
Server('Server', 'Server', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Server
include('fontawesome/Solid/Server')

' renders the element
Server('Server', 'Server', 'an optional tech label', 'an optional description')
@enduml
```

