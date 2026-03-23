# CloudUploadAlt


```text
fontawesome/Solid/CloudUploadAlt
```

```text
include('fontawesome/Solid/CloudUploadAlt')
```



| Illustration | CloudUploadAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudUploadAlt.png) | ![illustration for CloudUploadAlt](../../fontawesome/Solid/CloudUploadAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudUploadAltXs>`
- `<$CloudUploadAltSm>`
- `<$CloudUploadAltMd>`
- `<$CloudUploadAltLg>`





## CloudUploadAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudUploadAlt
include('fontawesome/Solid/CloudUploadAlt')

' renders the element
CloudUploadAlt('CloudUploadAlt', 'Cloud Upload Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudUploadAlt
include('fontawesome/Solid/CloudUploadAlt')

' renders the element
CloudUploadAlt('CloudUploadAlt', 'Cloud Upload Alt', 'an optional tech label', 'an optional description')
@enduml
```

