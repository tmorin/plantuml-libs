# Create


```text
material-4/Content/Create
```

```text
include('material-4/Content/Create')
```



| Illustration | Create |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Create.png) | ![illustration for Create](../../material-4/Content/Create.Local.png) |




## Create

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Create
include('material-4/Content/Create')

' renders the element
Create('Create', 'Create', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Create
include('material-4/Content/Create')

' renders the element
Create('Create', 'Create', 'an optional tech label', 'an optional description')
@enduml
```

