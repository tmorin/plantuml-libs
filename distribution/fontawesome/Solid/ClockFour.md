# ClockFour


```text
fontawesome/Solid/ClockFour
```

```text
include('fontawesome/Solid/ClockFour')
```



| Illustration | ClockFour |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ClockFour.png) | ![illustration for ClockFour](../../fontawesome/Solid/ClockFour.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClockFourXs>`
- `<$ClockFourSm>`
- `<$ClockFourMd>`
- `<$ClockFourLg>`





## ClockFour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClockFour
include('fontawesome/Solid/ClockFour')

' renders the element
ClockFour('ClockFour', 'Clock Four', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClockFour
include('fontawesome/Solid/ClockFour')

' renders the element
ClockFour('ClockFour', 'Clock Four', 'an optional tech label', 'an optional description')
@enduml
```

