# CriticalRole


```text
fontawesome-6/Brands/CriticalRole
```

```text
include('fontawesome-6/Brands/CriticalRole')
```



| Illustration | CriticalRole |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CriticalRole.png) | ![illustration for CriticalRole](../../fontawesome-6/Brands/CriticalRole.Local.png) |




## CriticalRole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CriticalRole
include('fontawesome-6/Brands/CriticalRole')

' renders the element
CriticalRole('CriticalRole', 'Critical Role', 'an optional tech label')
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

' loads the Item which embeds the element CriticalRole
include('fontawesome-6/Brands/CriticalRole')

' renders the element
CriticalRole('CriticalRole', 'Critical Role', 'an optional tech label')
@enduml
```

