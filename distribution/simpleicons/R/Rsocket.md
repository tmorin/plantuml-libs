# Rsocket


```text
simpleicons/R/Rsocket
```

```text
include('simpleicons/R/Rsocket')
```



| Illustration | Rsocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rsocket.png) | ![illustration for Rsocket](../../simpleicons/R/Rsocket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RsocketXs>`
- `<$RsocketSm>`
- `<$RsocketMd>`
- `<$RsocketLg>`





## Rsocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rsocket
include('simpleicons/R/Rsocket')

' renders the element
Rsocket('Rsocket', 'Rsocket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rsocket
include('simpleicons/R/Rsocket')

' renders the element
Rsocket('Rsocket', 'Rsocket', 'an optional tech label', 'an optional description')
@enduml
```

