# Datadog


```text
simpleicons-8/D/Datadog
```

```text
include('simpleicons-8/D/Datadog')
```



| Illustration | Datadog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Datadog.png) | ![illustration for Datadog](../../simpleicons-8/D/Datadog.Local.png) |




## Datadog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Datadog
include('simpleicons-8/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datadog
include('simpleicons-8/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label', 'an optional description')
@enduml
```

