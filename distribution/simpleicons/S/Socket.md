# Socket


```text
simpleicons/S/Socket
```

```text
include('simpleicons/S/Socket')
```



| Illustration | Socket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Socket.png) | ![illustration for Socket](../../simpleicons/S/Socket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SocketXs>`
- `<$SocketSm>`
- `<$SocketMd>`
- `<$SocketLg>`





## Socket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Socket
include('simpleicons/S/Socket')

' renders the element
Socket('Socket', 'Socket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Socket
include('simpleicons/S/Socket')

' renders the element
Socket('Socket', 'Socket', 'an optional tech label', 'an optional description')
@enduml
```

