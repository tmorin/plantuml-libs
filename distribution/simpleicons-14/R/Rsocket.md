# Rsocket


```text
simpleicons-14/R/Rsocket
```

```text
include('simpleicons-14/R/Rsocket')
```



| Illustration | Rsocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rsocket.png) | ![illustration for Rsocket](../../simpleicons-14/R/Rsocket.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rsocket
include('simpleicons-14/R/Rsocket')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rsocket
include('simpleicons-14/R/Rsocket')

' renders the element
Rsocket('Rsocket', 'Rsocket', 'an optional tech label', 'an optional description')
@enduml
```

