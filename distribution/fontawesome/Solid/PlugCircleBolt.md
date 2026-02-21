# PlugCircleBolt


```text
fontawesome/Solid/PlugCircleBolt
```

```text
include('fontawesome/Solid/PlugCircleBolt')
```



| Illustration | PlugCircleBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlugCircleBolt.png) | ![illustration for PlugCircleBolt](../../fontawesome/Solid/PlugCircleBolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlugCircleBoltXs>`
- `<$PlugCircleBoltSm>`
- `<$PlugCircleBoltMd>`
- `<$PlugCircleBoltLg>`





## PlugCircleBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCircleBolt
include('fontawesome/Solid/PlugCircleBolt')

' renders the element
PlugCircleBolt('PlugCircleBolt', 'Plug Circle Bolt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCircleBolt
include('fontawesome/Solid/PlugCircleBolt')

' renders the element
PlugCircleBolt('PlugCircleBolt', 'Plug Circle Bolt', 'an optional tech label', 'an optional description')
@enduml
```

