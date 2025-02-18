# Cockpit


```text
simpleicons-14/C/Cockpit
```

```text
include('simpleicons-14/C/Cockpit')
```



| Illustration | Cockpit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cockpit.png) | ![illustration for Cockpit](../../simpleicons-14/C/Cockpit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CockpitXs>`
- `<$CockpitSm>`
- `<$CockpitMd>`
- `<$CockpitLg>`





## Cockpit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cockpit
include('simpleicons-14/C/Cockpit')

' renders the element
Cockpit('Cockpit', 'Cockpit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cockpit
include('simpleicons-14/C/Cockpit')

' renders the element
Cockpit('Cockpit', 'Cockpit', 'an optional tech label', 'an optional description')
@enduml
```

