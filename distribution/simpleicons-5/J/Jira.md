# Jira


```text
simpleicons-5/J/Jira
```

```text
include('simpleicons-5/J/Jira')
```



| Illustration | Jira |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jira.png) | ![illustration for Jira](../../simpleicons-5/J/Jira.Local.png) |




## Jira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jira
include('simpleicons-5/J/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label')
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

' loads the Item which embeds the element Jira
include('simpleicons-5/J/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label')
@enduml
```

