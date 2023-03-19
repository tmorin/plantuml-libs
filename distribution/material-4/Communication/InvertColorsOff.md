# InvertColorsOff


```text
material-4/Communication/InvertColorsOff
```

```text
include('material-4/Communication/InvertColorsOff')
```



| Illustration | InvertColorsOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/InvertColorsOff.png) | ![illustration for InvertColorsOff](../../material-4/Communication/InvertColorsOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InvertColorsOffXs>`
- `<$InvertColorsOffSm>`
- `<$InvertColorsOffMd>`
- `<$InvertColorsOffLg>`





## InvertColorsOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element InvertColorsOff
include('material-4/Communication/InvertColorsOff')

' renders the element
InvertColorsOff('InvertColorsOff', 'Invert Colors Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InvertColorsOff
include('material-4/Communication/InvertColorsOff')

' renders the element
InvertColorsOff('InvertColorsOff', 'Invert Colors Off', 'an optional tech label', 'an optional description')
@enduml
```

