# Gitpod


```text
simpleicons-5/G/Gitpod
```

```text
include('simpleicons-5/G/Gitpod')
```



| Illustration | Gitpod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitpod.png) | ![illustration for Gitpod](../../simpleicons-5/G/Gitpod.Local.png) |




## Gitpod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-5/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label')
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

' loads the Item which embeds the element Gitpod
include('simpleicons-5/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label')
@enduml
```

