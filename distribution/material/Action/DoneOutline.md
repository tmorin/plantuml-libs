# DoneOutline


```text
material/Action/DoneOutline
```

```text
include('material/Action/DoneOutline')
```



| Illustration | DoneOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DoneOutline.png) | ![illustration for DoneOutline](../../material/Action/DoneOutline.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element DoneOutline
include('material/Action/DoneOutline')

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
include('material/bootstrap')

' loads the Item which embeds the element DoneOutline
include('material/Action/DoneOutline')

' renders the element
DoneOutline('DoneOutline', 'Done Outline', 'an optional tech label', 'an optional description')
@enduml
```

