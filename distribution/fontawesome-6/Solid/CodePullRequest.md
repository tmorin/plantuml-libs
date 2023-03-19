# CodePullRequest


```text
fontawesome-6/Solid/CodePullRequest
```

```text
include('fontawesome-6/Solid/CodePullRequest')
```



| Illustration | CodePullRequest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CodePullRequest.png) | ![illustration for CodePullRequest](../../fontawesome-6/Solid/CodePullRequest.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodePullRequestXs>`
- `<$CodePullRequestSm>`
- `<$CodePullRequestMd>`
- `<$CodePullRequestLg>`





## CodePullRequest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CodePullRequest
include('fontawesome-6/Solid/CodePullRequest')

' renders the element
CodePullRequest('CodePullRequest', 'Code Pull Request', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CodePullRequest
include('fontawesome-6/Solid/CodePullRequest')

' renders the element
CodePullRequest('CodePullRequest', 'Code Pull Request', 'an optional tech label', 'an optional description')
@enduml
```

