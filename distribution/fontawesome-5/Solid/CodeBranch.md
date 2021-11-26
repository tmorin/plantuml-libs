# CodeBranch


```text
fontawesome-5/Solid/CodeBranch
```

```text
include('fontawesome-5/Solid/CodeBranch')
```



| Illustration | CodeBranch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CodeBranch.png) | ![illustration for CodeBranch](../../fontawesome-5/Solid/CodeBranch.Local.png) |




## CodeBranch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CodeBranch
include('fontawesome-5/Solid/CodeBranch')

' renders the element
CodeBranch('CodeBranch', 'Code Branch', 'an optional tech label')
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

' loads the Item which embeds the element CodeBranch
include('fontawesome-5/Solid/CodeBranch')

' renders the element
CodeBranch('CodeBranch', 'Code Branch', 'an optional tech label')
@enduml
```

