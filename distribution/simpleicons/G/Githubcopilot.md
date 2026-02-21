# Githubcopilot


```text
simpleicons/G/Githubcopilot
```

```text
include('simpleicons/G/Githubcopilot')
```



| Illustration | Githubcopilot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Githubcopilot.png) | ![illustration for Githubcopilot](../../simpleicons/G/Githubcopilot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GithubcopilotXs>`
- `<$GithubcopilotSm>`
- `<$GithubcopilotMd>`
- `<$GithubcopilotLg>`





## Githubcopilot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Githubcopilot
include('simpleicons/G/Githubcopilot')

' renders the element
Githubcopilot('Githubcopilot', 'Githubcopilot', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Githubcopilot
include('simpleicons/G/Githubcopilot')

' renders the element
Githubcopilot('Githubcopilot', 'Githubcopilot', 'an optional tech label', 'an optional description')
@enduml
```

