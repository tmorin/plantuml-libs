# MobileOff


```text
material/Device/MobileOff
```

```text
include('material/Device/MobileOff')
```



| Illustration | MobileOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/MobileOff.png) | ![illustration for MobileOff](../../material/Device/MobileOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileOffXs>`
- `<$MobileOffSm>`
- `<$MobileOffMd>`
- `<$MobileOffLg>`





## MobileOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MobileOff
include('material/Device/MobileOff')

' renders the element
MobileOff('MobileOff', 'Mobile Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileOff
include('material/Device/MobileOff')

' renders the element
MobileOff('MobileOff', 'Mobile Off', 'an optional tech label', 'an optional description')
@enduml
```

