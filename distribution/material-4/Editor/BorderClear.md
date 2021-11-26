# BorderClear


```text
material-4/Editor/BorderClear
```

```text
include('material-4/Editor/BorderClear')
```



| Illustration | BorderClear |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderClear.png) | ![illustration for BorderClear](../../material-4/Editor/BorderClear.Local.png) |




## BorderClear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderClear
include('material-4/Editor/BorderClear')

' renders the element
BorderClear('BorderClear', 'Border Clear', 'an optional tech label')
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

' loads the Item which embeds the element BorderClear
include('material-4/Editor/BorderClear')

' renders the element
BorderClear('BorderClear', 'Border Clear', 'an optional tech label')
@enduml
```

