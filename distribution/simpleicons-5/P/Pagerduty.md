# Pagerduty


```text
simpleicons-5/P/Pagerduty
```

```text
include('simpleicons-5/P/Pagerduty')
```



| Illustration | Pagerduty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pagerduty.png) | ![illustration for Pagerduty](../../simpleicons-5/P/Pagerduty.Local.png) |




## Pagerduty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pagerduty
include('simpleicons-5/P/Pagerduty')

' renders the element
Pagerduty('Pagerduty', 'Pagerduty', 'an optional tech label')
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

' loads the Item which embeds the element Pagerduty
include('simpleicons-5/P/Pagerduty')

' renders the element
Pagerduty('Pagerduty', 'Pagerduty', 'an optional tech label')
@enduml
```

