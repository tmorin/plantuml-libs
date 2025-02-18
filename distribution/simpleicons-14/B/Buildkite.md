# Buildkite


```text
simpleicons-14/B/Buildkite
```

```text
include('simpleicons-14/B/Buildkite')
```



| Illustration | Buildkite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Buildkite.png) | ![illustration for Buildkite](../../simpleicons-14/B/Buildkite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildkiteXs>`
- `<$BuildkiteSm>`
- `<$BuildkiteMd>`
- `<$BuildkiteLg>`





## Buildkite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Buildkite
include('simpleicons-14/B/Buildkite')

' renders the element
Buildkite('Buildkite', 'Buildkite', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Buildkite
include('simpleicons-14/B/Buildkite')

' renders the element
Buildkite('Buildkite', 'Buildkite', 'an optional tech label', 'an optional description')
@enduml
```

