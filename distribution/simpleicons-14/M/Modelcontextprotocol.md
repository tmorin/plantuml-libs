# Modelcontextprotocol


```text
simpleicons-14/M/Modelcontextprotocol
```

```text
include('simpleicons-14/M/Modelcontextprotocol')
```



| Illustration | Modelcontextprotocol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Modelcontextprotocol.png) | ![illustration for Modelcontextprotocol](../../simpleicons-14/M/Modelcontextprotocol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModelcontextprotocolXs>`
- `<$ModelcontextprotocolSm>`
- `<$ModelcontextprotocolMd>`
- `<$ModelcontextprotocolLg>`





## Modelcontextprotocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Modelcontextprotocol
include('simpleicons-14/M/Modelcontextprotocol')

' renders the element
Modelcontextprotocol('Modelcontextprotocol', 'Modelcontextprotocol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modelcontextprotocol
include('simpleicons-14/M/Modelcontextprotocol')

' renders the element
Modelcontextprotocol('Modelcontextprotocol', 'Modelcontextprotocol', 'an optional tech label', 'an optional description')
@enduml
```

