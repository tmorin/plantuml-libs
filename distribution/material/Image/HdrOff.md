# HdrOff


```text
material/Image/HdrOff
```

```text
include('material/Image/HdrOff')
```



| Illustration | HdrOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/HdrOff.png) | ![illustration for HdrOff](../../material/Image/HdrOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HdrOffXs>`
- `<$HdrOffSm>`
- `<$HdrOffMd>`
- `<$HdrOffLg>`





## HdrOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element HdrOff
include('material/Image/HdrOff')

' renders the element
HdrOff('HdrOff', 'Hdr Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrOff
include('material/Image/HdrOff')

' renders the element
HdrOff('HdrOff', 'Hdr Off', 'an optional tech label', 'an optional description')
@enduml
```

