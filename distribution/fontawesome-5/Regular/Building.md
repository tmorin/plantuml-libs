# Building


```text
fontawesome-5/Regular/Building
```

```text
include('fontawesome-5/Regular/Building')
```



| Illustration | Building |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Building.png) | ![illustration for Building](../../fontawesome-5/Regular/Building.Local.png) |




## Building

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Building
include('fontawesome-5/Regular/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label')
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

' loads the Item which embeds the element Building
include('fontawesome-5/Regular/Building')

' renders the element
Building('Building', 'Building', 'an optional tech label')
@enduml
```

