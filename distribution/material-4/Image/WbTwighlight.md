# WbTwighlight


```text
material-4/Image/WbTwighlight
```

```text
include('material-4/Image/WbTwighlight')
```



| Illustration | WbTwighlight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbTwighlight.png) | ![illustration for WbTwighlight](../../material-4/Image/WbTwighlight.Local.png) |




## WbTwighlight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WbTwighlight
include('material-4/Image/WbTwighlight')

' renders the element
WbTwighlight('WbTwighlight', 'Wb Twighlight', 'an optional tech label')
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

' loads the Item which embeds the element WbTwighlight
include('material-4/Image/WbTwighlight')

' renders the element
WbTwighlight('WbTwighlight', 'Wb Twighlight', 'an optional tech label')
@enduml
```

