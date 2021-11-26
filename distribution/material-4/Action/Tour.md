# Tour


```text
material-4/Action/Tour
```

```text
include('material-4/Action/Tour')
```



| Illustration | Tour |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Tour.png) | ![illustration for Tour](../../material-4/Action/Tour.Local.png) |




## Tour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tour
include('material-4/Action/Tour')

' renders the element
Tour('Tour', 'Tour', 'an optional tech label')
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

' loads the Item which embeds the element Tour
include('material-4/Action/Tour')

' renders the element
Tour('Tour', 'Tour', 'an optional tech label')
@enduml
```

