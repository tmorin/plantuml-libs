# Gitextensions


```text
simpleicons-6/G/Gitextensions
```

```text
include('simpleicons-6/G/Gitextensions')
```



| Illustration | Gitextensions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gitextensions.png) | ![illustration for Gitextensions](../../simpleicons-6/G/Gitextensions.Local.png) |




## Gitextensions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gitextensions
include('simpleicons-6/G/Gitextensions')

' renders the element
Gitextensions('Gitextensions', 'Gitextensions', 'an optional tech label')
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

' loads the Item which embeds the element Gitextensions
include('simpleicons-6/G/Gitextensions')

' renders the element
Gitextensions('Gitextensions', 'Gitextensions', 'an optional tech label')
@enduml
```

