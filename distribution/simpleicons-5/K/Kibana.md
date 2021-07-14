# Kibana


```text
simpleicons-5/K/Kibana
```

```text
include('simpleicons-5/K/Kibana')
```



| Illustration | Kibana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kibana.png) | ![illustration for Kibana](../../simpleicons-5/K/Kibana.Local.png) |




## Kibana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons-5/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label')
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

' loads the Item which embeds the element Kibana
include('simpleicons-5/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label')
@enduml
```

