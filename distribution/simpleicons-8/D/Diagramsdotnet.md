# Diagramsdotnet


```text
simpleicons-8/D/Diagramsdotnet
```

```text
include('simpleicons-8/D/Diagramsdotnet')
```



| Illustration | Diagramsdotnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Diagramsdotnet.png) | ![illustration for Diagramsdotnet](../../simpleicons-8/D/Diagramsdotnet.Local.png) |




## Diagramsdotnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-8/D/Diagramsdotnet')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Diagramsdotnet
include('simpleicons-8/D/Diagramsdotnet')

' renders the element
Diagramsdotnet('Diagramsdotnet', 'Diagramsdotnet', 'an optional tech label', 'an optional description')
@enduml
```

