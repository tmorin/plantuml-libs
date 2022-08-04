# PersonSwimming


```text
fontawesome-6/Solid/PersonSwimming
```

```text
include('fontawesome-6/Solid/PersonSwimming')
```



| Illustration | PersonSwimming |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonSwimming.png) | ![illustration for PersonSwimming](../../fontawesome-6/Solid/PersonSwimming.Local.png) |




## PersonSwimming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonSwimming
include('fontawesome-6/Solid/PersonSwimming')

' renders the element
PersonSwimming('PersonSwimming', 'Person Swimming', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonSwimming
include('fontawesome-6/Solid/PersonSwimming')

' renders the element
PersonSwimming('PersonSwimming', 'Person Swimming', 'an optional tech label', 'an optional description')
@enduml
```

