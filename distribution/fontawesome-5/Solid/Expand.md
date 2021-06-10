# Expand


```text
fontawesome-5/Solid/Expand
```

```text
include('fontawesome-5/Solid/Expand')
```



| Illustration | Expand |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Expand.png) | ![illustration for Expand](../../fontawesome-5/Solid/Expand.Local.png) |




## Expand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Expand
include('fontawesome-5/Solid/Expand')

' renders the element
Expand('Expand', 'Expand', 'an optional tech label')
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

' loads the Item which embeds the element Expand
include('fontawesome-5/Solid/Expand')

' renders the element
Expand('Expand', 'Expand', 'an optional tech label')
@enduml
```

