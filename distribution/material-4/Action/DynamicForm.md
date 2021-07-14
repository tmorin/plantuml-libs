# DynamicForm


```text
material-4/Action/DynamicForm
```

```text
include('material-4/Action/DynamicForm')
```



| Illustration | DynamicForm |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DynamicForm.png) | ![illustration for DynamicForm](../../material-4/Action/DynamicForm.Local.png) |




## DynamicForm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DynamicForm
include('material-4/Action/DynamicForm')

' renders the element
DynamicForm('DynamicForm', 'Dynamic Form', 'an optional tech label')
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

' loads the Item which embeds the element DynamicForm
include('material-4/Action/DynamicForm')

' renders the element
DynamicForm('DynamicForm', 'Dynamic Form', 'an optional tech label')
@enduml
```

