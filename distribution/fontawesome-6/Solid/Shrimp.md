# Shrimp


```text
fontawesome-6/Solid/Shrimp
```

```text
include('fontawesome-6/Solid/Shrimp')
```



| Illustration | Shrimp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shrimp.png) | ![illustration for Shrimp](../../fontawesome-6/Solid/Shrimp.Local.png) |




## Shrimp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shrimp
include('fontawesome-6/Solid/Shrimp')

' renders the element
Shrimp('Shrimp', 'Shrimp', 'an optional tech label')
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

' loads the Item which embeds the element Shrimp
include('fontawesome-6/Solid/Shrimp')

' renders the element
Shrimp('Shrimp', 'Shrimp', 'an optional tech label')
@enduml
```

