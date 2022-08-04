# FileImage


```text
fontawesome-6/Solid/FileImage
```

```text
include('fontawesome-6/Solid/FileImage')
```



| Illustration | FileImage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileImage.png) | ![illustration for FileImage](../../fontawesome-6/Solid/FileImage.Local.png) |




## FileImage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileImage
include('fontawesome-6/Solid/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileImage
include('fontawesome-6/Solid/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label', 'an optional description')
@enduml
```

