# Bazel


```text
simpleicons-14/B/Bazel
```

```text
include('simpleicons-14/B/Bazel')
```



| Illustration | Bazel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bazel.png) | ![illustration for Bazel](../../simpleicons-14/B/Bazel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BazelXs>`
- `<$BazelSm>`
- `<$BazelMd>`
- `<$BazelLg>`





## Bazel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bazel
include('simpleicons-14/B/Bazel')

' renders the element
Bazel('Bazel', 'Bazel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bazel
include('simpleicons-14/B/Bazel')

' renders the element
Bazel('Bazel', 'Bazel', 'an optional tech label', 'an optional description')
@enduml
```

