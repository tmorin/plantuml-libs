# Buildkite


```text
simpleicons-5/B/Buildkite
```

```text
include('simpleicons-5/B/Buildkite')
```



| Illustration | Buildkite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Buildkite.png) | ![illustration for Buildkite](../../simpleicons-5/B/Buildkite.Local.png) |




## Buildkite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Buildkite
include('simpleicons-5/B/Buildkite')

' renders the element
Buildkite('Buildkite', 'Buildkite', 'an optional tech label')
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

' loads the Item which embeds the element Buildkite
include('simpleicons-5/B/Buildkite')

' renders the element
Buildkite('Buildkite', 'Buildkite', 'an optional tech label')
@enduml
```

