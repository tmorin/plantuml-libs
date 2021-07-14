# LineStyle


```text
material-4/Action/LineStyle
```

```text
include('material-4/Action/LineStyle')
```



| Illustration | LineStyle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LineStyle.png) | ![illustration for LineStyle](../../material-4/Action/LineStyle.Local.png) |




## LineStyle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LineStyle
include('material-4/Action/LineStyle')

' renders the element
LineStyle('LineStyle', 'Line Style', 'an optional tech label')
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

' loads the Item which embeds the element LineStyle
include('material-4/Action/LineStyle')

' renders the element
LineStyle('LineStyle', 'Line Style', 'an optional tech label')
@enduml
```

