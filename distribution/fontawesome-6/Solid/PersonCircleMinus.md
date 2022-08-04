# PersonCircleMinus


```text
fontawesome-6/Solid/PersonCircleMinus
```

```text
include('fontawesome-6/Solid/PersonCircleMinus')
```



| Illustration | PersonCircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonCircleMinus.png) | ![illustration for PersonCircleMinus](../../fontawesome-6/Solid/PersonCircleMinus.Local.png) |




## PersonCircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCircleMinus
include('fontawesome-6/Solid/PersonCircleMinus')

' renders the element
PersonCircleMinus('PersonCircleMinus', 'Person Circle Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleMinus
include('fontawesome-6/Solid/PersonCircleMinus')

' renders the element
PersonCircleMinus('PersonCircleMinus', 'Person Circle Minus', 'an optional tech label', 'an optional description')
@enduml
```

