# Add


```text
material-4/Content/Add
```

```text
include('material-4/Content/Add')
```



| Illustration | Add |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Add.png) | ![illustration for Add](../../material-4/Content/Add.Local.png) |




## Add

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Add
include('material-4/Content/Add')

' renders the element
Add('Add', 'Add', 'an optional tech label')
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

' loads the Item which embeds the element Add
include('material-4/Content/Add')

' renders the element
Add('Add', 'Add', 'an optional tech label')
@enduml
```

