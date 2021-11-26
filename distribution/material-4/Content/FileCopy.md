# FileCopy


```text
material-4/Content/FileCopy
```

```text
include('material-4/Content/FileCopy')
```



| Illustration | FileCopy |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/FileCopy.png) | ![illustration for FileCopy](../../material-4/Content/FileCopy.Local.png) |




## FileCopy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FileCopy
include('material-4/Content/FileCopy')

' renders the element
FileCopy('FileCopy', 'File Copy', 'an optional tech label')
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

' loads the Item which embeds the element FileCopy
include('material-4/Content/FileCopy')

' renders the element
FileCopy('FileCopy', 'File Copy', 'an optional tech label')
@enduml
```

