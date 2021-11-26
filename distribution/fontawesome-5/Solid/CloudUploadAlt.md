# CloudUploadAlt


```text
fontawesome-5/Solid/CloudUploadAlt
```

```text
include('fontawesome-5/Solid/CloudUploadAlt')
```



| Illustration | CloudUploadAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudUploadAlt.png) | ![illustration for CloudUploadAlt](../../fontawesome-5/Solid/CloudUploadAlt.Local.png) |




## CloudUploadAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudUploadAlt
include('fontawesome-5/Solid/CloudUploadAlt')

' renders the element
CloudUploadAlt('CloudUploadAlt', 'Cloud Upload Alt', 'an optional tech label')
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

' loads the Item which embeds the element CloudUploadAlt
include('fontawesome-5/Solid/CloudUploadAlt')

' renders the element
CloudUploadAlt('CloudUploadAlt', 'Cloud Upload Alt', 'an optional tech label')
@enduml
```

