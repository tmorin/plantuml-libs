# WheelchairMove


```text
fontawesome/Solid/WheelchairMove
```

```text
include('fontawesome/Solid/WheelchairMove')
```



| Illustration | WheelchairMove |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WheelchairMove.png) | ![illustration for WheelchairMove](../../fontawesome/Solid/WheelchairMove.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheelchairMoveXs>`
- `<$WheelchairMoveSm>`
- `<$WheelchairMoveMd>`
- `<$WheelchairMoveLg>`





## WheelchairMove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WheelchairMove
include('fontawesome/Solid/WheelchairMove')

' renders the element
WheelchairMove('WheelchairMove', 'Wheelchair Move', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WheelchairMove
include('fontawesome/Solid/WheelchairMove')

' renders the element
WheelchairMove('WheelchairMove', 'Wheelchair Move', 'an optional tech label', 'an optional description')
@enduml
```

