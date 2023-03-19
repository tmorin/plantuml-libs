# MicNone


```text
material-4/Av/MicNone
```

```text
include('material-4/Av/MicNone')
```



| Illustration | MicNone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/MicNone.png) | ![illustration for MicNone](../../material-4/Av/MicNone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicNoneXs>`
- `<$MicNoneSm>`
- `<$MicNoneMd>`
- `<$MicNoneLg>`





## MicNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MicNone
include('material-4/Av/MicNone')

' renders the element
MicNone('MicNone', 'Mic None', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicNone
include('material-4/Av/MicNone')

' renders the element
MicNone('MicNone', 'Mic None', 'an optional tech label', 'an optional description')
@enduml
```

