# FileWord


```text
fontawesome-5/Regular/FileWord
```

```text
include('fontawesome-5/Regular/FileWord')
```



| Illustration | FileWord |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FileWord.png) | ![illustration for FileWord](../../fontawesome-5/Regular/FileWord.Local.png) |




## FileWord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileWord
include('fontawesome-5/Regular/FileWord')

' renders the element
FileWord('FileWord', 'File Word', 'an optional tech label')
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

' loads the Item which embeds the element FileWord
include('fontawesome-5/Regular/FileWord')

' renders the element
FileWord('FileWord', 'File Word', 'an optional tech label')
@enduml
```

