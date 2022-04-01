# WheelchairMove


```text
fontawesome-6/Solid/WheelchairMove
```

```text
include('fontawesome-6/Solid/WheelchairMove')
```



| Illustration | WheelchairMove |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WheelchairMove.png) | ![illustration for WheelchairMove](../../fontawesome-6/Solid/WheelchairMove.Local.png) |




## WheelchairMove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WheelchairMove
include('fontawesome-6/Solid/WheelchairMove')

' renders the element
WheelchairMove('WheelchairMove', 'Wheelchair Move', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WheelchairMove
include('fontawesome-6/Solid/WheelchairMove')

' renders the element
WheelchairMove('WheelchairMove', 'Wheelchair Move', 'an optional tech label')
@enduml
```

