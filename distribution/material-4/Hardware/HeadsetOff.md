# HeadsetOff


```text
material-4/Hardware/HeadsetOff
```

```text
include('material-4/Hardware/HeadsetOff')
```



| Illustration | HeadsetOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/HeadsetOff.png) | ![illustration for HeadsetOff](../../material-4/Hardware/HeadsetOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadsetOffXs>`
- `<$HeadsetOffSm>`
- `<$HeadsetOffMd>`
- `<$HeadsetOffLg>`





## HeadsetOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HeadsetOff
include('material-4/Hardware/HeadsetOff')

' renders the element
HeadsetOff('HeadsetOff', 'Headset Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadsetOff
include('material-4/Hardware/HeadsetOff')

' renders the element
HeadsetOff('HeadsetOff', 'Headset Off', 'an optional tech label', 'an optional description')
@enduml
```

