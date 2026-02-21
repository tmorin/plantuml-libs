# CodeBranch


```text
fontawesome/Solid/CodeBranch
```

```text
include('fontawesome/Solid/CodeBranch')
```



| Illustration | CodeBranch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CodeBranch.png) | ![illustration for CodeBranch](../../fontawesome/Solid/CodeBranch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeBranchXs>`
- `<$CodeBranchSm>`
- `<$CodeBranchMd>`
- `<$CodeBranchLg>`





## CodeBranch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CodeBranch
include('fontawesome/Solid/CodeBranch')

' renders the element
CodeBranch('CodeBranch', 'Code Branch', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CodeBranch
include('fontawesome/Solid/CodeBranch')

' renders the element
CodeBranch('CodeBranch', 'Code Branch', 'an optional tech label', 'an optional description')
@enduml
```

