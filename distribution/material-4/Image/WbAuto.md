# WbAuto


```text
material-4/Image/WbAuto
```

```text
include('material-4/Image/WbAuto')
```



| Illustration | WbAuto |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbAuto.png) | ![illustration for WbAuto](../../material-4/Image/WbAuto.Local.png) |




## WbAuto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WbAuto
include('material-4/Image/WbAuto')

' renders the element
WbAuto('WbAuto', 'Wb Auto', 'an optional tech label')
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

' loads the Item which embeds the element WbAuto
include('material-4/Image/WbAuto')

' renders the element
WbAuto('WbAuto', 'Wb Auto', 'an optional tech label')
@enduml
```

