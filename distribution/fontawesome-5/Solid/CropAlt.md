# CropAlt


```text
fontawesome-5/Solid/CropAlt
```

```text
include('fontawesome-5/Solid/CropAlt')
```



| Illustration | CropAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CropAlt.png) | ![illustration for CropAlt](../../fontawesome-5/Solid/CropAlt.Local.png) |




## CropAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CropAlt
include('fontawesome-5/Solid/CropAlt')

' renders the element
CropAlt('CropAlt', 'Crop Alt', 'an optional tech label')
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

' loads the Item which embeds the element CropAlt
include('fontawesome-5/Solid/CropAlt')

' renders the element
CropAlt('CropAlt', 'Crop Alt', 'an optional tech label')
@enduml
```

