# SquareFull


```text
fontawesome-5/Solid/SquareFull
```

```text
include('fontawesome-5/Solid/SquareFull')
```



| Illustration | SquareFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SquareFull.png) | ![illustration for SquareFull](../../fontawesome-5/Solid/SquareFull.Local.png) |




## SquareFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SquareFull
include('fontawesome-5/Solid/SquareFull')

' renders the element
SquareFull('SquareFull', 'Square Full', 'an optional tech label')
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

' loads the Item which embeds the element SquareFull
include('fontawesome-5/Solid/SquareFull')

' renders the element
SquareFull('SquareFull', 'Square Full', 'an optional tech label')
@enduml
```

