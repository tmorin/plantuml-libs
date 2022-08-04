# Upload


```text
fontawesome-6/Solid/Upload
```

```text
include('fontawesome-6/Solid/Upload')
```



| Illustration | Upload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Upload.png) | ![illustration for Upload](../../fontawesome-6/Solid/Upload.Local.png) |




## Upload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Upload
include('fontawesome-6/Solid/Upload')

' renders the element
Upload('Upload', 'Upload', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Upload
include('fontawesome-6/Solid/Upload')

' renders the element
Upload('Upload', 'Upload', 'an optional tech label', 'an optional description')
@enduml
```

