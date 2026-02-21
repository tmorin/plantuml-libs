# Launchpad


```text
simpleicons/L/Launchpad
```

```text
include('simpleicons/L/Launchpad')
```



| Illustration | Launchpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Launchpad.png) | ![illustration for Launchpad](../../simpleicons/L/Launchpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaunchpadXs>`
- `<$LaunchpadSm>`
- `<$LaunchpadMd>`
- `<$LaunchpadLg>`





## Launchpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Launchpad
include('simpleicons/L/Launchpad')

' renders the element
Launchpad('Launchpad', 'Launchpad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Launchpad
include('simpleicons/L/Launchpad')

' renders the element
Launchpad('Launchpad', 'Launchpad', 'an optional tech label', 'an optional description')
@enduml
```

