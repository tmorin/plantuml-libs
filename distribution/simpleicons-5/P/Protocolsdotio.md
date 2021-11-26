# Protocolsdotio


```text
simpleicons-5/P/Protocolsdotio
```

```text
include('simpleicons-5/P/Protocolsdotio')
```



| Illustration | Protocolsdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Protocolsdotio.png) | ![illustration for Protocolsdotio](../../simpleicons-5/P/Protocolsdotio.Local.png) |




## Protocolsdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Protocolsdotio
include('simpleicons-5/P/Protocolsdotio')

' renders the element
Protocolsdotio('Protocolsdotio', 'Protocolsdotio', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Protocolsdotio
include('simpleicons-5/P/Protocolsdotio')

' renders the element
Protocolsdotio('Protocolsdotio', 'Protocolsdotio', 'an optional tech label')
@enduml
```

