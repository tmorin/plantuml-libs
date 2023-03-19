# Octoprint


```text
simpleicons-8/O/Octoprint
```

```text
include('simpleicons-8/O/Octoprint')
```



| Illustration | Octoprint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Octoprint.png) | ![illustration for Octoprint](../../simpleicons-8/O/Octoprint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OctoprintXs>`
- `<$OctoprintSm>`
- `<$OctoprintMd>`
- `<$OctoprintLg>`





## Octoprint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Octoprint
include('simpleicons-8/O/Octoprint')

' renders the element
Octoprint('Octoprint', 'Octoprint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octoprint
include('simpleicons-8/O/Octoprint')

' renders the element
Octoprint('Octoprint', 'Octoprint', 'an optional tech label', 'an optional description')
@enduml
```

