# TouchApp


```text
material-4/Action/TouchApp
```

```text
include('material-4/Action/TouchApp')
```



| Illustration | TouchApp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/TouchApp.png) | ![illustration for TouchApp](../../material-4/Action/TouchApp.Local.png) |




## TouchApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TouchApp
include('material-4/Action/TouchApp')

' renders the element
TouchApp('TouchApp', 'Touch App', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TouchApp
include('material-4/Action/TouchApp')

' renders the element
TouchApp('TouchApp', 'Touch App', 'an optional tech label', 'an optional description')
@enduml
```

