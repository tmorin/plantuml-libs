# Style


```text
material-4/Image/Style
```

```text
include('material-4/Image/Style')
```



| Illustration | Style |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Style.png) | ![illustration for Style](../../material-4/Image/Style.Local.png) |




## Style

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Style
include('material-4/Image/Style')

' renders the element
Style('Style', 'Style', 'an optional tech label')
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

' loads the Item which embeds the element Style
include('material-4/Image/Style')

' renders the element
Style('Style', 'Style', 'an optional tech label')
@enduml
```

