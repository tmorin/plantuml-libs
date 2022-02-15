# Hand


```text
fontawesome-6/Solid/Hand
```

```text
include('fontawesome-6/Solid/Hand')
```



| Illustration | Hand |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hand.png) | ![illustration for Hand](../../fontawesome-6/Solid/Hand.Local.png) |




## Hand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hand
include('fontawesome-6/Solid/Hand')

' renders the element
Hand('Hand', 'Hand', 'an optional tech label')
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

' loads the Item which embeds the element Hand
include('fontawesome-6/Solid/Hand')

' renders the element
Hand('Hand', 'Hand', 'an optional tech label')
@enduml
```

