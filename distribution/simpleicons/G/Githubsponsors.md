# Githubsponsors


```text
simpleicons/G/Githubsponsors
```

```text
include('simpleicons/G/Githubsponsors')
```



| Illustration | Githubsponsors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Githubsponsors.png) | ![illustration for Githubsponsors](../../simpleicons/G/Githubsponsors.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GithubsponsorsXs>`
- `<$GithubsponsorsSm>`
- `<$GithubsponsorsMd>`
- `<$GithubsponsorsLg>`





## Githubsponsors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Githubsponsors
include('simpleicons/G/Githubsponsors')

' renders the element
Githubsponsors('Githubsponsors', 'Githubsponsors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Githubsponsors
include('simpleicons/G/Githubsponsors')

' renders the element
Githubsponsors('Githubsponsors', 'Githubsponsors', 'an optional tech label', 'an optional description')
@enduml
```

