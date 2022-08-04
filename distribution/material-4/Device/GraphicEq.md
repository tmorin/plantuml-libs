# GraphicEq


```text
material-4/Device/GraphicEq
```

```text
include('material-4/Device/GraphicEq')
```



| Illustration | GraphicEq |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/GraphicEq.png) | ![illustration for GraphicEq](../../material-4/Device/GraphicEq.Local.png) |




## GraphicEq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GraphicEq
include('material-4/Device/GraphicEq')

' renders the element
GraphicEq('GraphicEq', 'Graphic Eq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GraphicEq
include('material-4/Device/GraphicEq')

' renders the element
GraphicEq('GraphicEq', 'Graphic Eq', 'an optional tech label', 'an optional description')
@enduml
```

