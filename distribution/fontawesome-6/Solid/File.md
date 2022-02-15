# File


```text
fontawesome-6/Solid/File
```

```text
include('fontawesome-6/Solid/File')
```



| Illustration | File |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/File.png) | ![illustration for File](../../fontawesome-6/Solid/File.Local.png) |




## File

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element File
include('fontawesome-6/Solid/File')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element File
include('fontawesome-6/Solid/File')

' renders the element
File('File', 'File', 'an optional tech label')
@enduml
```

