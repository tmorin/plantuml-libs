# Calculator


```text
fontawesome-5/Solid/Calculator
```

```text
include('fontawesome-5/Solid/Calculator')
```



| Illustration | Calculator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Calculator.png) | ![illustration for Calculator](../../fontawesome-5/Solid/Calculator.Local.png) |




## Calculator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Calculator
include('fontawesome-5/Solid/Calculator')

' renders the element
Calculator('Calculator', 'Calculator', 'an optional tech label')
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

' loads the Item which embeds the element Calculator
include('fontawesome-5/Solid/Calculator')

' renders the element
Calculator('Calculator', 'Calculator', 'an optional tech label')
@enduml
```

