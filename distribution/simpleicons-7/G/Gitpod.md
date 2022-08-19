# Gitpod


```text
simpleicons-7/G/Gitpod
```

```text
include('simpleicons-7/G/Gitpod')
```



| Illustration | Gitpod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Gitpod.png) | ![illustration for Gitpod](../../simpleicons-7/G/Gitpod.Local.png) |




## Gitpod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Gitpod
include('simpleicons-7/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitpod
include('simpleicons-7/G/Gitpod')

' renders the element
Gitpod('Gitpod', 'Gitpod', 'an optional tech label', 'an optional description')
@enduml
```
