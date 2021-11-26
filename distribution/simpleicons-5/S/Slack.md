# Slack


```text
simpleicons-5/S/Slack
```

```text
include('simpleicons-5/S/Slack')
```



| Illustration | Slack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Slack.png) | ![illustration for Slack](../../simpleicons-5/S/Slack.Local.png) |




## Slack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Slack
include('simpleicons-5/S/Slack')

' renders the element
Slack('Slack', 'Slack', 'an optional tech label')
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

' loads the Item which embeds the element Slack
include('simpleicons-5/S/Slack')

' renders the element
Slack('Slack', 'Slack', 'an optional tech label')
@enduml
```

