# PlugCircleMinus


```text
fontawesome/Solid/PlugCircleMinus
```

```text
include('fontawesome/Solid/PlugCircleMinus')
```



| Illustration | PlugCircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlugCircleMinus.png) | ![illustration for PlugCircleMinus](../../fontawesome/Solid/PlugCircleMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlugCircleMinusXs>`
- `<$PlugCircleMinusSm>`
- `<$PlugCircleMinusMd>`
- `<$PlugCircleMinusLg>`





## PlugCircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlugCircleMinus
include('fontawesome/Solid/PlugCircleMinus')

' renders the element
PlugCircleMinus('PlugCircleMinus', 'Plug Circle Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlugCircleMinus
include('fontawesome/Solid/PlugCircleMinus')

' renders the element
PlugCircleMinus('PlugCircleMinus', 'Plug Circle Minus', 'an optional tech label', 'an optional description')
@enduml
```

