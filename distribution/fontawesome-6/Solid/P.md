# P


```text
fontawesome-6/Solid/P
```

```text
include('fontawesome-6/Solid/P')
```



| Illustration | P |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/P.png) | ![illustration for P](../../fontawesome-6/Solid/P.Local.png) |




## P

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element P
include('fontawesome-6/Solid/P')

' renders the element
P('P', 'P', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element P
include('fontawesome-6/Solid/P')

' renders the element
P('P', 'P', 'an optional tech label', 'an optional description')
@enduml
```

