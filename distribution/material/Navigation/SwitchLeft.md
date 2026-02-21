# SwitchLeft


```text
material/Navigation/SwitchLeft
```

```text
include('material/Navigation/SwitchLeft')
```



| Illustration | SwitchLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/SwitchLeft.png) | ![illustration for SwitchLeft](../../material/Navigation/SwitchLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwitchLeftXs>`
- `<$SwitchLeftSm>`
- `<$SwitchLeftMd>`
- `<$SwitchLeftLg>`





## SwitchLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SwitchLeft
include('material/Navigation/SwitchLeft')

' renders the element
SwitchLeft('SwitchLeft', 'Switch Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwitchLeft
include('material/Navigation/SwitchLeft')

' renders the element
SwitchLeft('SwitchLeft', 'Switch Left', 'an optional tech label', 'an optional description')
@enduml
```

