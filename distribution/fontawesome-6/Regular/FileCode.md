# FileCode


```text
fontawesome-6/Regular/FileCode
```

```text
include('fontawesome-6/Regular/FileCode')
```



| Illustration | FileCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FileCode.png) | ![illustration for FileCode](../../fontawesome-6/Regular/FileCode.Local.png) |




## FileCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileCode
include('fontawesome-6/Regular/FileCode')

' renders the element
FileCode('FileCode', 'File Code', 'an optional tech label')
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

' loads the Item which embeds the element FileCode
include('fontawesome-6/Regular/FileCode')

' renders the element
FileCode('FileCode', 'File Code', 'an optional tech label')
@enduml
```

