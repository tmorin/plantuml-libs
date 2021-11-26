# Githubactions


```text
simpleicons-5/G/Githubactions
```

```text
include('simpleicons-5/G/Githubactions')
```



| Illustration | Githubactions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Githubactions.png) | ![illustration for Githubactions](../../simpleicons-5/G/Githubactions.Local.png) |




## Githubactions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Githubactions
include('simpleicons-5/G/Githubactions')

' renders the element
Githubactions('Githubactions', 'Githubactions', 'an optional tech label')
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

' loads the Item which embeds the element Githubactions
include('simpleicons-5/G/Githubactions')

' renders the element
Githubactions('Githubactions', 'Githubactions', 'an optional tech label')
@enduml
```

