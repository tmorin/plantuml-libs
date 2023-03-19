# AlarmOff


```text
material-4/Action/AlarmOff
```

```text
include('material-4/Action/AlarmOff')
```



| Illustration | AlarmOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AlarmOff.png) | ![illustration for AlarmOff](../../material-4/Action/AlarmOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlarmOffXs>`
- `<$AlarmOffSm>`
- `<$AlarmOffMd>`
- `<$AlarmOffLg>`





## AlarmOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AlarmOff
include('material-4/Action/AlarmOff')

' renders the element
AlarmOff('AlarmOff', 'Alarm Off', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element AlarmOff
include('material-4/Action/AlarmOff')

' renders the element
AlarmOff('AlarmOff', 'Alarm Off', 'an optional tech label', 'an optional description')
@enduml
```

