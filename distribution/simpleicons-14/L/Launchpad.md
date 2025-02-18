# Launchpad


```text
simpleicons-14/L/Launchpad
```

```text
include('simpleicons-14/L/Launchpad')
```



| Illustration | Launchpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Launchpad.png) | ![illustration for Launchpad](../../simpleicons-14/L/Launchpad.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Launchpad
include('simpleicons-14/L/Launchpad')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Launchpad
include('simpleicons-14/L/Launchpad')

' renders the element
Launchpad('Launchpad', 'Launchpad', 'an optional tech label', 'an optional description')
@enduml
```

