# Approval


```text
material-4/File/Approval
```

```text
include('material-4/File/Approval')
```



| Illustration | Approval |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/Approval.png) | ![illustration for Approval](../../material-4/File/Approval.Local.png) |




## Approval

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Approval
include('material-4/File/Approval')

' renders the element
Approval('Approval', 'Approval', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Approval
include('material-4/File/Approval')

' renders the element
Approval('Approval', 'Approval', 'an optional tech label')
@enduml
```

