# Gitea


```text
simpleicons-7/G/Gitea
```

```text
include('simpleicons-7/G/Gitea')
```



| Illustration | Gitea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gitea.png) | ![illustration for Gitea](../../simpleicons-7/G/Gitea.Local.png) |




## Gitea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gitea
include('simpleicons-7/G/Gitea')

' renders the element
Gitea('Gitea', 'Gitea', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gitea
include('simpleicons-7/G/Gitea')

' renders the element
Gitea('Gitea', 'Gitea', 'an optional tech label')
@enduml
```

