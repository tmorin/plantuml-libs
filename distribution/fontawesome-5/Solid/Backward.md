# Backward


```text
fontawesome-5/Solid/Backward
```

```text
include('fontawesome-5/Solid/Backward')
```



| Illustration | Backward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Backward.png) | ![illustration for Backward](../../fontawesome-5/Solid/Backward.Local.png) |




## Backward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Backward
include('fontawesome-5/Solid/Backward')

' renders the element
Backward('Backward', 'Backward', 'an optional tech label')
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

' loads the Item which embeds the element Backward
include('fontawesome-5/Solid/Backward')

' renders the element
Backward('Backward', 'Backward', 'an optional tech label')
@enduml
```

