# Jira


```text
fontawesome-5/Brands/Jira
```

```text
include('fontawesome-5/Brands/Jira')
```



| Illustration | Jira |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Jira.png) | ![illustration for Jira](../../fontawesome-5/Brands/Jira.Local.png) |




## Jira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Jira
include('fontawesome-5/Brands/Jira')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Jira
include('fontawesome-5/Brands/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label')
@enduml
```

