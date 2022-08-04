# FileArrowUp


```text
fontawesome-6/Solid/FileArrowUp
```

```text
include('fontawesome-6/Solid/FileArrowUp')
```



| Illustration | FileArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileArrowUp.png) | ![illustration for FileArrowUp](../../fontawesome-6/Solid/FileArrowUp.Local.png) |




## FileArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileArrowUp
include('fontawesome-6/Solid/FileArrowUp')

' renders the element
FileArrowUp('FileArrowUp', 'File Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileArrowUp
include('fontawesome-6/Solid/FileArrowUp')

' renders the element
FileArrowUp('FileArrowUp', 'File Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

