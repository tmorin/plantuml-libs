# HourglassHalf


```text
fontawesome-6/Solid/HourglassHalf
```

```text
include('fontawesome-6/Solid/HourglassHalf')
```



| Illustration | HourglassHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HourglassHalf.png) | ![illustration for HourglassHalf](../../fontawesome-6/Solid/HourglassHalf.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HourglassHalf
include('fontawesome-6/Solid/HourglassHalf')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HourglassHalf
include('fontawesome-6/Solid/HourglassHalf')

' renders the element
HourglassHalf('HourglassHalf', 'Hourglass Half', 'an optional tech label', 'an optional description')
@enduml
```

