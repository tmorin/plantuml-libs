# BlurOff


```text
material/Image/BlurOff
```

```text
include('material/Image/BlurOff')
```



| Illustration | BlurOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/BlurOff.png) | ![illustration for BlurOff](../../material/Image/BlurOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlurOffXs>`
- `<$BlurOffSm>`
- `<$BlurOffMd>`
- `<$BlurOffLg>`





## BlurOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BlurOff
include('material/Image/BlurOff')

' renders the element
BlurOff('BlurOff', 'Blur Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BlurOff
include('material/Image/BlurOff')

' renders the element
BlurOff('BlurOff', 'Blur Off', 'an optional tech label', 'an optional description')
@enduml
```

