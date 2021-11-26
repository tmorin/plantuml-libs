# Server


```text
fontawesome-5/Solid/Server
```

```text
include('fontawesome-5/Solid/Server')
```



| Illustration | Server |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Server.png) | ![illustration for Server](../../fontawesome-5/Solid/Server.Local.png) |




## Server

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Server
include('fontawesome-5/Solid/Server')

' renders the element
Server('Server', 'Server', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Server
include('fontawesome-5/Solid/Server')

' renders the element
Server('Server', 'Server', 'an optional tech label')
@enduml
```

