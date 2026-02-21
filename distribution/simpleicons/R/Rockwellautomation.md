# Rockwellautomation


```text
simpleicons/R/Rockwellautomation
```

```text
include('simpleicons/R/Rockwellautomation')
```



| Illustration | Rockwellautomation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rockwellautomation.png) | ![illustration for Rockwellautomation](../../simpleicons/R/Rockwellautomation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RockwellautomationXs>`
- `<$RockwellautomationSm>`
- `<$RockwellautomationMd>`
- `<$RockwellautomationLg>`





## Rockwellautomation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rockwellautomation
include('simpleicons/R/Rockwellautomation')

' renders the element
Rockwellautomation('Rockwellautomation', 'Rockwellautomation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rockwellautomation
include('simpleicons/R/Rockwellautomation')

' renders the element
Rockwellautomation('Rockwellautomation', 'Rockwellautomation', 'an optional tech label', 'an optional description')
@enduml
```

