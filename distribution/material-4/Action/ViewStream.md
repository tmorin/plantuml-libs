# ViewStream


```text
material-4/Action/ViewStream
```

```text
include('material-4/Action/ViewStream')
```



| Illustration | ViewStream |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ViewStream.png) | ![illustration for ViewStream](../../material-4/Action/ViewStream.Local.png) |




## ViewStream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewStream
include('material-4/Action/ViewStream')

' renders the element
ViewStream('ViewStream', 'View Stream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViewStream
include('material-4/Action/ViewStream')

' renders the element
ViewStream('ViewStream', 'View Stream', 'an optional tech label', 'an optional description')
@enduml
```

