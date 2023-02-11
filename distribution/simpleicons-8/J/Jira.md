# Jira


```text
simpleicons-8/J/Jira
```

```text
include('simpleicons-8/J/Jira')
```



| Illustration | Jira |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Jira.png) | ![illustration for Jira](../../simpleicons-8/J/Jira.Local.png) |




## Jira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Jira
include('simpleicons-8/J/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jira
include('simpleicons-8/J/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label', 'an optional description')
@enduml
```

