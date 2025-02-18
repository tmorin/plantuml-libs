# Githubactions


```text
simpleicons-14/G/Githubactions
```

```text
include('simpleicons-14/G/Githubactions')
```



| Illustration | Githubactions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Githubactions.png) | ![illustration for Githubactions](../../simpleicons-14/G/Githubactions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GithubactionsXs>`
- `<$GithubactionsSm>`
- `<$GithubactionsMd>`
- `<$GithubactionsLg>`





## Githubactions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Githubactions
include('simpleicons-14/G/Githubactions')

' renders the element
Githubactions('Githubactions', 'Githubactions', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Githubactions
include('simpleicons-14/G/Githubactions')

' renders the element
Githubactions('Githubactions', 'Githubactions', 'an optional tech label', 'an optional description')
@enduml
```

