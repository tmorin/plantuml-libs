# CloudUpload


```text
fontawesome/Solid/CloudUpload
```

```text
include('fontawesome/Solid/CloudUpload')
```



| Illustration | CloudUpload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudUpload.png) | ![illustration for CloudUpload](../../fontawesome/Solid/CloudUpload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudUploadXs>`
- `<$CloudUploadSm>`
- `<$CloudUploadMd>`
- `<$CloudUploadLg>`





## CloudUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudUpload
include('fontawesome/Solid/CloudUpload')

' renders the element
CloudUpload('CloudUpload', 'Cloud Upload', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudUpload
include('fontawesome/Solid/CloudUpload')

' renders the element
CloudUpload('CloudUpload', 'Cloud Upload', 'an optional tech label', 'an optional description')
@enduml
```

