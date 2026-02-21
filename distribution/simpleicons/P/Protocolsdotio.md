# Protocolsdotio


```text
simpleicons/P/Protocolsdotio
```

```text
include('simpleicons/P/Protocolsdotio')
```



| Illustration | Protocolsdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Protocolsdotio.png) | ![illustration for Protocolsdotio](../../simpleicons/P/Protocolsdotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtocolsdotioXs>`
- `<$ProtocolsdotioSm>`
- `<$ProtocolsdotioMd>`
- `<$ProtocolsdotioLg>`





## Protocolsdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protocolsdotio
include('simpleicons/P/Protocolsdotio')

' renders the element
Protocolsdotio('Protocolsdotio', 'Protocolsdotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protocolsdotio
include('simpleicons/P/Protocolsdotio')

' renders the element
Protocolsdotio('Protocolsdotio', 'Protocolsdotio', 'an optional tech label', 'an optional description')
@enduml
```

