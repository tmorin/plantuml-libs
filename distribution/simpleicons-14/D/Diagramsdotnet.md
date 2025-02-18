# Diagramsdotnet


```text
simpleicons-14/D/Diagramsdotnet
```

```text
include('simpleicons-14/D/Diagramsdotnet')
```



| Illustration | Diagramsdotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Diagramsdotnet.png) | ![illustration for Diagramsdotnet](../../simpleicons-14/D/Diagramsdotnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiagramsdotnetXs>`
- `<$DiagramsdotnetSm>`
- `<$DiagramsdotnetMd>`
- `<$DiagramsdotnetLg>`





## Diagramsdotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-14/D/Diagramsdotnet')

' renders the element
Diagramsdotnet('Diagramsdotnet', 'Diagramsdotnet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-14/D/Diagramsdotnet')

' renders the element
Diagramsdotnet('Diagramsdotnet', 'Diagramsdotnet', 'an optional tech label', 'an optional description')
@enduml
```

