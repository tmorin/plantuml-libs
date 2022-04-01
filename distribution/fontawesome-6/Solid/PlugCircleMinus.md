# PlugCircleMinus


```text
fontawesome-6/Solid/PlugCircleMinus
```

```text
include('fontawesome-6/Solid/PlugCircleMinus')
```



| Illustration | PlugCircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlugCircleMinus.png) | ![illustration for PlugCircleMinus](../../fontawesome-6/Solid/PlugCircleMinus.Local.png) |




## PlugCircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleMinus
include('fontawesome-6/Solid/PlugCircleMinus')

' renders the element
PlugCircleMinus('PlugCircleMinus', 'Plug Circle Minus', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleMinus
include('fontawesome-6/Solid/PlugCircleMinus')

' renders the element
PlugCircleMinus('PlugCircleMinus', 'Plug Circle Minus', 'an optional tech label')
@enduml
```

