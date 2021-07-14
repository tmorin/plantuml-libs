# Diagramsdotnet


```text
simpleicons-5/D/Diagramsdotnet
```

```text
include('simpleicons-5/D/Diagramsdotnet')
```



| Illustration | Diagramsdotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Diagramsdotnet.png) | ![illustration for Diagramsdotnet](../../simpleicons-5/D/Diagramsdotnet.Local.png) |




## Diagramsdotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-5/D/Diagramsdotnet')

' renders the element
Diagramsdotnet('Diagramsdotnet', 'Diagramsdotnet', 'an optional tech label')
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

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-5/D/Diagramsdotnet')

' renders the element
Diagramsdotnet('Diagramsdotnet', 'Diagramsdotnet', 'an optional tech label')
@enduml
```

