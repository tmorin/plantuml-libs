# Gitpod


```text
simpleicons-6/G/Gitpod
```

```text
include('simpleicons-6/G/Gitpod')
```



| Illustration | Gitpod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gitpod.png) | ![illustration for Gitpod](../../simpleicons-6/G/Gitpod.Local.png) |




## Gitpod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-6/G/Gitpod')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-6/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label')
@enduml
```

