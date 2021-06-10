# Edit


```text
fontawesome-5/Solid/Edit
```

```text
include('fontawesome-5/Solid/Edit')
```



| Illustration | Edit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Edit.png) | ![illustration for Edit](../../fontawesome-5/Solid/Edit.Local.png) |




## Edit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Edit
include('fontawesome-5/Solid/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label')
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

' loads the Item which embeds the element Edit
include('fontawesome-5/Solid/Edit')

' renders the element
Edit('Edit', 'Edit', 'an optional tech label')
@enduml
```

