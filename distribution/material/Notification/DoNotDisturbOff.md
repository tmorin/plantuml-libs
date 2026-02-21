# DoNotDisturbOff


```text
material/Notification/DoNotDisturbOff
```

```text
include('material/Notification/DoNotDisturbOff')
```



| Illustration | DoNotDisturbOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/DoNotDisturbOff.png) | ![illustration for DoNotDisturbOff](../../material/Notification/DoNotDisturbOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoNotDisturbOffXs>`
- `<$DoNotDisturbOffSm>`
- `<$DoNotDisturbOffMd>`
- `<$DoNotDisturbOffLg>`





## DoNotDisturbOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DoNotDisturbOff
include('material/Notification/DoNotDisturbOff')

' renders the element
DoNotDisturbOff('DoNotDisturbOff', 'Do Not Disturb Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoNotDisturbOff
include('material/Notification/DoNotDisturbOff')

' renders the element
DoNotDisturbOff('DoNotDisturbOff', 'Do Not Disturb Off', 'an optional tech label', 'an optional description')
@enduml
```

