# Toggltrack


```text
simpleicons/T/Toggltrack
```

```text
include('simpleicons/T/Toggltrack')
```



| Illustration | Toggltrack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Toggltrack.png) | ![illustration for Toggltrack](../../simpleicons/T/Toggltrack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToggltrackXs>`
- `<$ToggltrackSm>`
- `<$ToggltrackMd>`
- `<$ToggltrackLg>`





## Toggltrack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Toggltrack
include('simpleicons/T/Toggltrack')

' renders the element
Toggltrack('Toggltrack', 'Toggltrack', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Toggltrack
include('simpleicons/T/Toggltrack')

' renders the element
Toggltrack('Toggltrack', 'Toggltrack', 'an optional tech label', 'an optional description')
@enduml
```

