# HourglassStart


```text
fontawesome/Solid/HourglassStart
```

```text
include('fontawesome/Solid/HourglassStart')
```



| Illustration | HourglassStart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HourglassStart.png) | ![illustration for HourglassStart](../../fontawesome/Solid/HourglassStart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassStartXs>`
- `<$HourglassStartSm>`
- `<$HourglassStartMd>`
- `<$HourglassStartLg>`





## HourglassStart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HourglassStart
include('fontawesome/Solid/HourglassStart')

' renders the element
HourglassStart('HourglassStart', 'Hourglass Start', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassStart
include('fontawesome/Solid/HourglassStart')

' renders the element
HourglassStart('HourglassStart', 'Hourglass Start', 'an optional tech label', 'an optional description')
@enduml
```

