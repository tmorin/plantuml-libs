# Class


```text
material-4/Action/Class
```

```text
include('material-4/Action/Class')
```



| Illustration | Class |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Class.png) | ![illustration for Class](../../material-4/Action/Class.Local.png) |




## Class

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Class
include('material-4/Action/Class')

' renders the element
Class('Class', 'Class', 'an optional tech label')
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

' loads the Item which embeds the element Class
include('material-4/Action/Class')

' renders the element
Class('Class', 'Class', 'an optional tech label')
@enduml
```

