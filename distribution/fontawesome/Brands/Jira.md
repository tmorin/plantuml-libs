# Jira


```text
fontawesome/Brands/Jira
```

```text
include('fontawesome/Brands/Jira')
```



| Illustration | Jira |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Jira.png) | ![illustration for Jira](../../fontawesome/Brands/Jira.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JiraXs>`
- `<$JiraSm>`
- `<$JiraMd>`
- `<$JiraLg>`





## Jira

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jira
include('fontawesome/Brands/Jira')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jira
include('fontawesome/Brands/Jira')

' renders the element
Jira('Jira', 'Jira', 'an optional tech label', 'an optional description')
@enduml
```

