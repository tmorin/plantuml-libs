# HourglassHalf


```text
fontawesome/Solid/HourglassHalf
```

```text
include('fontawesome/Solid/HourglassHalf')
```



| Illustration | HourglassHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HourglassHalf.png) | ![illustration for HourglassHalf](../../fontawesome/Solid/HourglassHalf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassHalfXs>`
- `<$HourglassHalfSm>`
- `<$HourglassHalfMd>`
- `<$HourglassHalfLg>`





## HourglassHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HourglassHalf
include('fontawesome/Solid/HourglassHalf')

' renders the element
HourglassHalf('HourglassHalf', 'Hourglass Half', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassHalf
include('fontawesome/Solid/HourglassHalf')

' renders the element
HourglassHalf('HourglassHalf', 'Hourglass Half', 'an optional tech label', 'an optional description')
@enduml
```

