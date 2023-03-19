# ClosedCaption


```text
material-4/Av/ClosedCaption
```

```text
include('material-4/Av/ClosedCaption')
```



| Illustration | ClosedCaption |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/ClosedCaption.png) | ![illustration for ClosedCaption](../../material-4/Av/ClosedCaption.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClosedCaptionXs>`
- `<$ClosedCaptionSm>`
- `<$ClosedCaptionMd>`
- `<$ClosedCaptionLg>`





## ClosedCaption

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ClosedCaption
include('material-4/Av/ClosedCaption')

' renders the element
ClosedCaption('ClosedCaption', 'Closed Caption', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClosedCaption
include('material-4/Av/ClosedCaption')

' renders the element
ClosedCaption('ClosedCaption', 'Closed Caption', 'an optional tech label', 'an optional description')
@enduml
```

