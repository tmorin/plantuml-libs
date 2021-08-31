# Rimacautomobili


```text
simpleicons-5/R/Rimacautomobili
```

```text
include('simpleicons-5/R/Rimacautomobili')
```



| Illustration | Rimacautomobili |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rimacautomobili.png) | ![illustration for Rimacautomobili](../../simpleicons-5/R/Rimacautomobili.Local.png) |




## Rimacautomobili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rimacautomobili
include('simpleicons-5/R/Rimacautomobili')

' renders the element
Rimacautomobili('Rimacautomobili', 'Rimacautomobili', 'an optional tech label')
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

' loads the Item which embeds the element Rimacautomobili
include('simpleicons-5/R/Rimacautomobili')

' renders the element
Rimacautomobili('Rimacautomobili', 'Rimacautomobili', 'an optional tech label')
@enduml
```

