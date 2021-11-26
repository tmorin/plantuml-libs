# Save


```text
material-4/Content/Save
```

```text
include('material-4/Content/Save')
```



| Illustration | Save |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Save.png) | ![illustration for Save](../../material-4/Content/Save.Local.png) |




## Save

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Save
include('material-4/Content/Save')

' renders the element
Save('Save', 'Save', 'an optional tech label')
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

' loads the Item which embeds the element Save
include('material-4/Content/Save')

' renders the element
Save('Save', 'Save', 'an optional tech label')
@enduml
```

