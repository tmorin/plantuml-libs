# FileArchive


```text
fontawesome-5/Solid/FileArchive
```

```text
include('fontawesome-5/Solid/FileArchive')
```



| Illustration | FileArchive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileArchive.png) | ![illustration for FileArchive](../../fontawesome-5/Solid/FileArchive.Local.png) |




## FileArchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileArchive
include('fontawesome-5/Solid/FileArchive')

' renders the element
FileArchive('FileArchive', 'File Archive', 'an optional tech label')
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

' loads the Item which embeds the element FileArchive
include('fontawesome-5/Solid/FileArchive')

' renders the element
FileArchive('FileArchive', 'File Archive', 'an optional tech label')
@enduml
```

