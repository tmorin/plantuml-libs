# Opentelemetry


```text
simpleicons-6/O/Opentelemetry
```

```text
include('simpleicons-6/O/Opentelemetry')
```



| Illustration | Opentelemetry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opentelemetry.png) | ![illustration for Opentelemetry](../../simpleicons-6/O/Opentelemetry.Local.png) |




## Opentelemetry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opentelemetry
include('simpleicons-6/O/Opentelemetry')

' renders the element
Opentelemetry('Opentelemetry', 'Opentelemetry', 'an optional tech label')
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

' loads the Item which embeds the element Opentelemetry
include('simpleicons-6/O/Opentelemetry')

' renders the element
Opentelemetry('Opentelemetry', 'Opentelemetry', 'an optional tech label')
@enduml
```

