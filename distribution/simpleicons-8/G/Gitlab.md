# Gitlab


```text
simpleicons-8/G/Gitlab
```

```text
include('simpleicons-8/G/Gitlab')
```



| Illustration | Gitlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitlab.png) | ![illustration for Gitlab](../../simpleicons-8/G/Gitlab.Local.png) |




## Gitlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitlab
include('simpleicons-8/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitlab
include('simpleicons-8/G/Gitlab')

' renders the element
Gitlab('Gitlab', 'Gitlab', 'an optional tech label', 'an optional description')
@enduml
```

