# Bus


```text
fontawesome/Solid/Bus
```

```text
include('fontawesome/Solid/Bus')
```



| Illustration | Bus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bus.png) | ![illustration for Bus](../../fontawesome/Solid/Bus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusXs>`
- `<$BusSm>`
- `<$BusMd>`
- `<$BusLg>`





## Bus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bus
include('fontawesome/Solid/Bus')

' renders the element
Bus('Bus', 'Bus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bus
include('fontawesome/Solid/Bus')

' renders the element
Bus('Bus', 'Bus', 'an optional tech label', 'an optional description')
@enduml
```

