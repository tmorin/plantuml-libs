# FlipToBack


```text
material-4/Action/FlipToBack
```

```text
include('material-4/Action/FlipToBack')
```



| Illustration | FlipToBack |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FlipToBack.png) | ![illustration for FlipToBack](../../material-4/Action/FlipToBack.Local.png) |




## FlipToBack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlipToBack
include('material-4/Action/FlipToBack')

' renders the element
FlipToBack('FlipToBack', 'Flip To Back', 'an optional tech label')
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

' loads the Item which embeds the element FlipToBack
include('material-4/Action/FlipToBack')

' renders the element
FlipToBack('FlipToBack', 'Flip To Back', 'an optional tech label')
@enduml
```

