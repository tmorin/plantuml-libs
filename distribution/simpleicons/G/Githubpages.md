# Githubpages


```text
simpleicons/G/Githubpages
```

```text
include('simpleicons/G/Githubpages')
```



| Illustration | Githubpages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Githubpages.png) | ![illustration for Githubpages](../../simpleicons/G/Githubpages.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GithubpagesXs>`
- `<$GithubpagesSm>`
- `<$GithubpagesMd>`
- `<$GithubpagesLg>`





## Githubpages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Githubpages
include('simpleicons/G/Githubpages')

' renders the element
Githubpages('Githubpages', 'Githubpages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Githubpages
include('simpleicons/G/Githubpages')

' renders the element
Githubpages('Githubpages', 'Githubpages', 'an optional tech label', 'an optional description')
@enduml
```

