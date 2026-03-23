# RectangleTimes


```text
fontawesome/Solid/RectangleTimes
```

```text
include('fontawesome/Solid/RectangleTimes')
```



| Illustration | RectangleTimes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RectangleTimes.png) | ![illustration for RectangleTimes](../../fontawesome/Solid/RectangleTimes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RectangleTimesXs>`
- `<$RectangleTimesSm>`
- `<$RectangleTimesMd>`
- `<$RectangleTimesLg>`





## RectangleTimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RectangleTimes
include('fontawesome/Solid/RectangleTimes')

' renders the element
RectangleTimes('RectangleTimes', 'Rectangle Times', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RectangleTimes
include('fontawesome/Solid/RectangleTimes')

' renders the element
RectangleTimes('RectangleTimes', 'Rectangle Times', 'an optional tech label', 'an optional description')
@enduml
```

