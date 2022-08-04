# Slack


```text
fontawesome-6/Brands/Slack
```

```text
include('fontawesome-6/Brands/Slack')
```



| Illustration | Slack |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Slack.png) | ![illustration for Slack](../../fontawesome-6/Brands/Slack.Local.png) |




## Slack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Slack
include('fontawesome-6/Brands/Slack')

' renders the element
Slack('Slack', 'Slack', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Slack
include('fontawesome-6/Brands/Slack')

' renders the element
Slack('Slack', 'Slack', 'an optional tech label', 'an optional description')
@enduml
```

