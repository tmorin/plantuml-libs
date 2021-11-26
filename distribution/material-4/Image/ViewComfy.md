# ViewComfy


```text
material-4/Image/ViewComfy
```

```text
include('material-4/Image/ViewComfy')
```



| Illustration | ViewComfy |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ViewComfy.png) | ![illustration for ViewComfy](../../material-4/Image/ViewComfy.Local.png) |




## ViewComfy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewComfy
include('material-4/Image/ViewComfy')

' renders the element
ViewComfy('ViewComfy', 'View Comfy', 'an optional tech label')
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

' loads the Item which embeds the element ViewComfy
include('material-4/Image/ViewComfy')

' renders the element
ViewComfy('ViewComfy', 'View Comfy', 'an optional tech label')
@enduml
```

