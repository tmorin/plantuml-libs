# SelectAll


```text
material-4/Content/SelectAll
```

```text
include('material-4/Content/SelectAll')
```



| Illustration | SelectAll |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/SelectAll.png) | ![illustration for SelectAll](../../material-4/Content/SelectAll.Local.png) |




## SelectAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SelectAll
include('material-4/Content/SelectAll')

' renders the element
SelectAll('SelectAll', 'Select All', 'an optional tech label')
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

' loads the Item which embeds the element SelectAll
include('material-4/Content/SelectAll')

' renders the element
SelectAll('SelectAll', 'Select All', 'an optional tech label')
@enduml
```

