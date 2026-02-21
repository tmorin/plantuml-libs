# CriticalRole


```text
fontawesome/Brands/CriticalRole
```

```text
include('fontawesome/Brands/CriticalRole')
```



| Illustration | CriticalRole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CriticalRole.png) | ![illustration for CriticalRole](../../fontawesome/Brands/CriticalRole.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CriticalRoleXs>`
- `<$CriticalRoleSm>`
- `<$CriticalRoleMd>`
- `<$CriticalRoleLg>`





## CriticalRole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CriticalRole
include('fontawesome/Brands/CriticalRole')

' renders the element
CriticalRole('CriticalRole', 'Critical Role', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CriticalRole
include('fontawesome/Brands/CriticalRole')

' renders the element
CriticalRole('CriticalRole', 'Critical Role', 'an optional tech label', 'an optional description')
@enduml
```

