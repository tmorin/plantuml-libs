# DynamicForm


```text
material/Action/DynamicForm
```

```text
include('material/Action/DynamicForm')
```



| Illustration | DynamicForm |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DynamicForm.png) | ![illustration for DynamicForm](../../material/Action/DynamicForm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DynamicFormXs>`
- `<$DynamicFormSm>`
- `<$DynamicFormMd>`
- `<$DynamicFormLg>`





## DynamicForm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DynamicForm
include('material/Action/DynamicForm')

' renders the element
DynamicForm('DynamicForm', 'Dynamic Form', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DynamicForm
include('material/Action/DynamicForm')

' renders the element
DynamicForm('DynamicForm', 'Dynamic Form', 'an optional tech label', 'an optional description')
@enduml
```

