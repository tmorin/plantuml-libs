# Inductiveautomation


```text
simpleicons/I/Inductiveautomation
```

```text
include('simpleicons/I/Inductiveautomation')
```



| Illustration | Inductiveautomation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Inductiveautomation.png) | ![illustration for Inductiveautomation](../../simpleicons/I/Inductiveautomation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InductiveautomationXs>`
- `<$InductiveautomationSm>`
- `<$InductiveautomationMd>`
- `<$InductiveautomationLg>`





## Inductiveautomation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Inductiveautomation
include('simpleicons/I/Inductiveautomation')

' renders the element
Inductiveautomation('Inductiveautomation', 'Inductiveautomation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inductiveautomation
include('simpleicons/I/Inductiveautomation')

' renders the element
Inductiveautomation('Inductiveautomation', 'Inductiveautomation', 'an optional tech label', 'an optional description')
@enduml
```

