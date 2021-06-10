# FileImage


```text
fontawesome-5/Regular/FileImage
```

```text
include('fontawesome-5/Regular/FileImage')
```



| Illustration | FileImage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FileImage.png) | ![illustration for FileImage](../../fontawesome-5/Regular/FileImage.Local.png) |




## FileImage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileImage
include('fontawesome-5/Regular/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label')
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

' loads the Item which embeds the element FileImage
include('fontawesome-5/Regular/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label')
@enduml
```

