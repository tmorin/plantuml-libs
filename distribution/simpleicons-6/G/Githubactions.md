# Githubactions


```text
simpleicons-6/G/Githubactions
```

```text
include('simpleicons-6/G/Githubactions')
```



| Illustration | Githubactions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Githubactions.png) | ![illustration for Githubactions](../../simpleicons-6/G/Githubactions.Local.png) |




## Githubactions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Githubactions
include('simpleicons-6/G/Githubactions')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Githubactions
include('simpleicons-6/G/Githubactions')

' renders the element
Githubactions('Githubactions', 'Githubactions', 'an optional tech label')
@enduml
```

