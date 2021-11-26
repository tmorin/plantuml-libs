# VerticalAlignTop


```text
material-4/Editor/VerticalAlignTop
```

```text
include('material-4/Editor/VerticalAlignTop')
```



| Illustration | VerticalAlignTop |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/VerticalAlignTop.png) | ![illustration for VerticalAlignTop](../../material-4/Editor/VerticalAlignTop.Local.png) |




## VerticalAlignTop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VerticalAlignTop
include('material-4/Editor/VerticalAlignTop')

' renders the element
VerticalAlignTop('VerticalAlignTop', 'Vertical Align Top', 'an optional tech label')
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

' loads the Item which embeds the element VerticalAlignTop
include('material-4/Editor/VerticalAlignTop')

' renders the element
VerticalAlignTop('VerticalAlignTop', 'Vertical Align Top', 'an optional tech label')
@enduml
```

