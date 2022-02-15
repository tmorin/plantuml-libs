# Launchpad


```text
simpleicons-6/L/Launchpad
```

```text
include('simpleicons-6/L/Launchpad')
```



| Illustration | Launchpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Launchpad.png) | ![illustration for Launchpad](../../simpleicons-6/L/Launchpad.Local.png) |




## Launchpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Launchpad
include('simpleicons-6/L/Launchpad')

' renders the element
Launchpad('Launchpad', 'Launchpad', 'an optional tech label')
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

' loads the Item which embeds the element Launchpad
include('simpleicons-6/L/Launchpad')

' renders the element
Launchpad('Launchpad', 'Launchpad', 'an optional tech label')
@enduml
```

