# DoneOutline


```text
material-4/Action/DoneOutline
```

```text
include('material-4/Action/DoneOutline')
```



| Illustration | DoneOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DoneOutline.png) | ![illustration for DoneOutline](../../material-4/Action/DoneOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoneOutlineXs>`
- `<$DoneOutlineSm>`
- `<$DoneOutlineMd>`
- `<$DoneOutlineLg>`





## DoneOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoneOutline
include('material-4/Action/DoneOutline')

' renders the element
DoneOutline('DoneOutline', 'Done Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoneOutline
include('material-4/Action/DoneOutline')

' renders the element
DoneOutline('DoneOutline', 'Done Outline', 'an optional tech label', 'an optional description')
@enduml
```

