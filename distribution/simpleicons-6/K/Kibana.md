# Kibana


```text
simpleicons-6/K/Kibana
```

```text
include('simpleicons-6/K/Kibana')
```



| Illustration | Kibana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kibana.png) | ![illustration for Kibana](../../simpleicons-6/K/Kibana.Local.png) |




## Kibana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons-6/K/Kibana')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kibana
include('simpleicons-6/K/Kibana')

' renders the element
Kibana('Kibana', 'Kibana', 'an optional tech label')
@enduml
```

