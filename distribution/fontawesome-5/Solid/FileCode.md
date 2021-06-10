# FileCode


```text
fontawesome-5/Solid/FileCode
```

```text
include('fontawesome-5/Solid/FileCode')
```



| Illustration | FileCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileCode.png) | ![illustration for FileCode](../../fontawesome-5/Solid/FileCode.Local.png) |




## FileCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileCode
include('fontawesome-5/Solid/FileCode')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileCode
include('fontawesome-5/Solid/FileCode')

' renders the element
FileCode('FileCode', 'File Code', 'an optional tech label')
@enduml
```

