# Upload


```text
fontawesome-5/Solid/Upload
```

```text
include('fontawesome-5/Solid/Upload')
```



| Illustration | Upload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Upload.png) | ![illustration for Upload](../../fontawesome-5/Solid/Upload.Local.png) |




## Upload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Upload
include('fontawesome-5/Solid/Upload')

' renders the element
Upload('Upload', 'Upload', 'an optional tech label')
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

' loads the Item which embeds the element Upload
include('fontawesome-5/Solid/Upload')

' renders the element
Upload('Upload', 'Upload', 'an optional tech label')
@enduml
```

