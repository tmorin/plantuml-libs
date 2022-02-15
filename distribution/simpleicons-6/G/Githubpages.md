# Githubpages


```text
simpleicons-6/G/Githubpages
```

```text
include('simpleicons-6/G/Githubpages')
```



| Illustration | Githubpages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Githubpages.png) | ![illustration for Githubpages](../../simpleicons-6/G/Githubpages.Local.png) |




## Githubpages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Githubpages
include('simpleicons-6/G/Githubpages')

' renders the element
Githubpages('Githubpages', 'Githubpages', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Githubpages
include('simpleicons-6/G/Githubpages')

' renders the element
Githubpages('Githubpages', 'Githubpages', 'an optional tech label')
@enduml
```

