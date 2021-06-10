# Chair


```text
fontawesome-5/Solid/Chair
```

```text
include('fontawesome-5/Solid/Chair')
```



| Illustration | Chair |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Chair.png) | ![illustration for Chair](../../fontawesome-5/Solid/Chair.Local.png) |




## Chair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Chair
include('fontawesome-5/Solid/Chair')

' renders the element
Chair('Chair', 'Chair', 'an optional tech label')
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

' loads the Item which embeds the element Chair
include('fontawesome-5/Solid/Chair')

' renders the element
Chair('Chair', 'Chair', 'an optional tech label')
@enduml
```

