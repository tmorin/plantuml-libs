# Gitlab


```text
simpleicons-5/G/Gitlab
```

```text
include('simpleicons-5/G/Gitlab')
```



| Illustration | Gitlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitlab.png) | ![illustration for Gitlab](../../simpleicons-5/G/Gitlab.Local.png) |




## Gitlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitlab
include('simpleicons-5/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label')
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

' loads the Item which embeds the element Gitlab
include('simpleicons-5/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label')
@enduml
```

