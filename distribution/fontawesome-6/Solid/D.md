# D


```text
fontawesome-6/Solid/D
```

```text
include('fontawesome-6/Solid/D')
```



| Illustration | D |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/D.png) | ![illustration for D](../../fontawesome-6/Solid/D.Local.png) |




## D

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element D
include('fontawesome-6/Solid/D')

' renders the element
D('D', 'D', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element D
include('fontawesome-6/Solid/D')

' renders the element
D('D', 'D', 'an optional tech label', 'an optional description')
@enduml
```

