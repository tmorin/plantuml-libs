# CircleMinus


```text
fontawesome-6/Solid/CircleMinus
```

```text
include('fontawesome-6/Solid/CircleMinus')
```



| Illustration | CircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleMinus.png) | ![illustration for CircleMinus](../../fontawesome-6/Solid/CircleMinus.Local.png) |




## CircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleMinus
include('fontawesome-6/Solid/CircleMinus')

' renders the element
CircleMinus('CircleMinus', 'Circle Minus', 'an optional tech label')
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

' loads the Item which embeds the element CircleMinus
include('fontawesome-6/Solid/CircleMinus')

' renders the element
CircleMinus('CircleMinus', 'Circle Minus', 'an optional tech label')
@enduml
```

