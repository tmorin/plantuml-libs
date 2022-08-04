# HandDots


```text
fontawesome-6/Solid/HandDots
```

```text
include('fontawesome-6/Solid/HandDots')
```



| Illustration | HandDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandDots.png) | ![illustration for HandDots](../../fontawesome-6/Solid/HandDots.Local.png) |




## HandDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandDots
include('fontawesome-6/Solid/HandDots')

' renders the element
HandDots('HandDots', 'Hand Dots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandDots
include('fontawesome-6/Solid/HandDots')

' renders the element
HandDots('HandDots', 'Hand Dots', 'an optional tech label', 'an optional description')
@enduml
```

