# HourglassEnd


```text
fontawesome/Solid/HourglassEnd
```

```text
include('fontawesome/Solid/HourglassEnd')
```



| Illustration | HourglassEnd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HourglassEnd.png) | ![illustration for HourglassEnd](../../fontawesome/Solid/HourglassEnd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HourglassEndXs>`
- `<$HourglassEndSm>`
- `<$HourglassEndMd>`
- `<$HourglassEndLg>`





## HourglassEnd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HourglassEnd
include('fontawesome/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassEnd
include('fontawesome/Solid/HourglassEnd')

' renders the element
HourglassEnd('HourglassEnd', 'Hourglass End', 'an optional tech label', 'an optional description')
@enduml
```

