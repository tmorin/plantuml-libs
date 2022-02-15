# CodeBranch


```text
fontawesome-6/Solid/CodeBranch
```

```text
include('fontawesome-6/Solid/CodeBranch')
```



| Illustration | CodeBranch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CodeBranch.png) | ![illustration for CodeBranch](../../fontawesome-6/Solid/CodeBranch.Local.png) |




## CodeBranch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CodeBranch
include('fontawesome-6/Solid/CodeBranch')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CodeBranch
include('fontawesome-6/Solid/CodeBranch')

' renders the element
CodeBranch('CodeBranch', 'Code Branch', 'an optional tech label')
@enduml
```

