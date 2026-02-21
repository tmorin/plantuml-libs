# Approval


```text
material/File/Approval
```

```text
include('material/File/Approval')
```



| Illustration | Approval |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/Approval.png) | ![illustration for Approval](../../material/File/Approval.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApprovalXs>`
- `<$ApprovalSm>`
- `<$ApprovalMd>`
- `<$ApprovalLg>`





## Approval

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Approval
include('material/File/Approval')

' renders the element
Approval('Approval', 'Approval', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Approval
include('material/File/Approval')

' renders the element
Approval('Approval', 'Approval', 'an optional tech label', 'an optional description')
@enduml
```

