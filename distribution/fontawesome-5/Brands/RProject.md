# RProject


```text
fontawesome-5/Brands/RProject
```

```text
include('fontawesome-5/Brands/RProject')
```



| Illustration | RProject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/RProject.png) | ![illustration for RProject](../../fontawesome-5/Brands/RProject.Local.png) |




## RProject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RProject
include('fontawesome-5/Brands/RProject')

' renders the element
RProject('RProject', 'R Project', 'an optional tech label')
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

' loads the Item which embeds the element RProject
include('fontawesome-5/Brands/RProject')

' renders the element
RProject('RProject', 'R Project', 'an optional tech label')
@enduml
```

