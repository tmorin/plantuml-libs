# Save


```text
fontawesome-5/Regular/Save
```

```text
include('fontawesome-5/Regular/Save')
```



| Illustration | Save |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Save.png) | ![illustration for Save](../../fontawesome-5/Regular/Save.Local.png) |




## Save

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Save
include('fontawesome-5/Regular/Save')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Save
include('fontawesome-5/Regular/Save')

' renders the element
Save('Save', 'Save', 'an optional tech label')
@enduml
```

