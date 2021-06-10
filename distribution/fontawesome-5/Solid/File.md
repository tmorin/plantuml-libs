# File


```text
fontawesome-5/Solid/File
```

```text
include('fontawesome-5/Solid/File')
```



| Illustration | File |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/File.png) | ![illustration for File](../../fontawesome-5/Solid/File.Local.png) |




## File

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element File
include('fontawesome-5/Solid/File')

' renders the element
File('File', 'File', 'an optional tech label')
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

' loads the Item which embeds the element File
include('fontawesome-5/Solid/File')

' renders the element
File('File', 'File', 'an optional tech label')
@enduml
```

