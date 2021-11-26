# FileAlt


```text
fontawesome-5/Regular/FileAlt
```

```text
include('fontawesome-5/Regular/FileAlt')
```



| Illustration | FileAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FileAlt.png) | ![illustration for FileAlt](../../fontawesome-5/Regular/FileAlt.Local.png) |




## FileAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileAlt
include('fontawesome-5/Regular/FileAlt')

' renders the element
FileAlt('FileAlt', 'File Alt', 'an optional tech label')
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

' loads the Item which embeds the element FileAlt
include('fontawesome-5/Regular/FileAlt')

' renders the element
FileAlt('FileAlt', 'File Alt', 'an optional tech label')
@enduml
```

