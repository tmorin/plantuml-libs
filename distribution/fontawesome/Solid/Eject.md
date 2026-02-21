# Eject


```text
fontawesome/Solid/Eject
```

```text
include('fontawesome/Solid/Eject')
```



| Illustration | Eject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Eject.png) | ![illustration for Eject](../../fontawesome/Solid/Eject.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EjectXs>`
- `<$EjectSm>`
- `<$EjectMd>`
- `<$EjectLg>`





## Eject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eject
include('fontawesome/Solid/Eject')

' renders the element
Eject('Eject', 'Eject', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eject
include('fontawesome/Solid/Eject')

' renders the element
Eject('Eject', 'Eject', 'an optional tech label', 'an optional description')
@enduml
```

