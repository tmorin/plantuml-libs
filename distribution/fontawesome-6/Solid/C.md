# C


```text
fontawesome-6/Solid/C
```

```text
include('fontawesome-6/Solid/C')
```



| Illustration | C |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/C.png) | ![illustration for C](../../fontawesome-6/Solid/C.Local.png) |




## C

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element C
include('fontawesome-6/Solid/C')

' renders the element
C('C', 'C', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element C
include('fontawesome-6/Solid/C')

' renders the element
C('C', 'C', 'an optional tech label', 'an optional description')
@enduml
```

