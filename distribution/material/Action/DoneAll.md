# DoneAll


```text
material/Action/DoneAll
```

```text
include('material/Action/DoneAll')
```



| Illustration | DoneAll |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DoneAll.png) | ![illustration for DoneAll](../../material/Action/DoneAll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoneAllXs>`
- `<$DoneAllSm>`
- `<$DoneAllMd>`
- `<$DoneAllLg>`





## DoneAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DoneAll
include('material/Action/DoneAll')

' renders the element
DoneAll('DoneAll', 'Done All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DoneAll
include('material/Action/DoneAll')

' renders the element
DoneAll('DoneAll', 'Done All', 'an optional tech label', 'an optional description')
@enduml
```

