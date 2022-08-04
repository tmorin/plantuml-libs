# FileCircleCheck


```text
fontawesome-6/Solid/FileCircleCheck
```

```text
include('fontawesome-6/Solid/FileCircleCheck')
```



| Illustration | FileCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileCircleCheck.png) | ![illustration for FileCircleCheck](../../fontawesome-6/Solid/FileCircleCheck.Local.png) |




## FileCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileCircleCheck
include('fontawesome-6/Solid/FileCircleCheck')

' renders the element
FileCircleCheck('FileCircleCheck', 'File Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCircleCheck
include('fontawesome-6/Solid/FileCircleCheck')

' renders the element
FileCircleCheck('FileCircleCheck', 'File Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

