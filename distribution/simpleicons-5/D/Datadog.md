# Datadog


```text
simpleicons-5/D/Datadog
```

```text
include('simpleicons-5/D/Datadog')
```



| Illustration | Datadog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Datadog.png) | ![illustration for Datadog](../../simpleicons-5/D/Datadog.Local.png) |




## Datadog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Datadog
include('simpleicons-5/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label')
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

' loads the Item which embeds the element Datadog
include('simpleicons-5/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label')
@enduml
```

