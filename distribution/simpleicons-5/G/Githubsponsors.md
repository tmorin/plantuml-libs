# Githubsponsors


```text
simpleicons-5/G/Githubsponsors
```

```text
include('simpleicons-5/G/Githubsponsors')
```



| Illustration | Githubsponsors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Githubsponsors.png) | ![illustration for Githubsponsors](../../simpleicons-5/G/Githubsponsors.Local.png) |




## Githubsponsors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Githubsponsors
include('simpleicons-5/G/Githubsponsors')

' renders the element
Githubsponsors('Githubsponsors', 'Githubsponsors', 'an optional tech label')
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

' loads the Item which embeds the element Githubsponsors
include('simpleicons-5/G/Githubsponsors')

' renders the element
Githubsponsors('Githubsponsors', 'Githubsponsors', 'an optional tech label')
@enduml
```

