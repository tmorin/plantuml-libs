# Alarm


```text
material/Action/Alarm
```

```text
include('material/Action/Alarm')
```



| Illustration | Alarm |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Alarm.png) | ![illustration for Alarm](../../material/Action/Alarm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlarmXs>`
- `<$AlarmSm>`
- `<$AlarmMd>`
- `<$AlarmLg>`





## Alarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Alarm
include('material/Action/Alarm')

' renders the element
Alarm('Alarm', 'Alarm', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Alarm
include('material/Action/Alarm')

' renders the element
Alarm('Alarm', 'Alarm', 'an optional tech label', 'an optional description')
@enduml
```

