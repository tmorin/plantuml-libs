# HeadsetMic


```text
material-4/Hardware/HeadsetMic
```

```text
include('material-4/Hardware/HeadsetMic')
```



| Illustration | HeadsetMic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/HeadsetMic.png) | ![illustration for HeadsetMic](../../material-4/Hardware/HeadsetMic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadsetMicXs>`
- `<$HeadsetMicSm>`
- `<$HeadsetMicMd>`
- `<$HeadsetMicLg>`





## HeadsetMic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HeadsetMic
include('material-4/Hardware/HeadsetMic')

' renders the element
HeadsetMic('HeadsetMic', 'Headset Mic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeadsetMic
include('material-4/Hardware/HeadsetMic')

' renders the element
HeadsetMic('HeadsetMic', 'Headset Mic', 'an optional tech label', 'an optional description')
@enduml
```

