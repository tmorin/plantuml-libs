# FileCircleXmark


```text
fontawesome-6/Solid/FileCircleXmark
```

```text
include('fontawesome-6/Solid/FileCircleXmark')
```



| Illustration | FileCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileCircleXmark.png) | ![illustration for FileCircleXmark](../../fontawesome-6/Solid/FileCircleXmark.Local.png) |




## FileCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileCircleXmark
include('fontawesome-6/Solid/FileCircleXmark')

' renders the element
FileCircleXmark('FileCircleXmark', 'File Circle Xmark', 'an optional tech label')
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

' loads the Item which embeds the element FileCircleXmark
include('fontawesome-6/Solid/FileCircleXmark')

' renders the element
FileCircleXmark('FileCircleXmark', 'File Circle Xmark', 'an optional tech label')
@enduml
```

