# Circle


```text
material-4/Image/Circle
```

```text
include('material-4/Image/Circle')
```



| Illustration | Circle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Circle.png) | ![illustration for Circle](../../material-4/Image/Circle.Local.png) |




## Circle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Circle
include('material-4/Image/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Circle
include('material-4/Image/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label', 'an optional description')
@enduml
```

