# PingPongPaddleBall


```text
fontawesome/Solid/PingPongPaddleBall
```

```text
include('fontawesome/Solid/PingPongPaddleBall')
```



| Illustration | PingPongPaddleBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PingPongPaddleBall.png) | ![illustration for PingPongPaddleBall](../../fontawesome/Solid/PingPongPaddleBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PingPongPaddleBallXs>`
- `<$PingPongPaddleBallSm>`
- `<$PingPongPaddleBallMd>`
- `<$PingPongPaddleBallLg>`





## PingPongPaddleBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PingPongPaddleBall
include('fontawesome/Solid/PingPongPaddleBall')

' renders the element
PingPongPaddleBall('PingPongPaddleBall', 'Ping Pong Paddle Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PingPongPaddleBall
include('fontawesome/Solid/PingPongPaddleBall')

' renders the element
PingPongPaddleBall('PingPongPaddleBall', 'Ping Pong Paddle Ball', 'an optional tech label', 'an optional description')
@enduml
```

