# HandRock


```text
fontawesome-5/Solid/HandRock
```

```text
include('fontawesome-5/Solid/HandRock')
```



| Illustration | HandRock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandRock.png) | ![illustration for HandRock](../../fontawesome-5/Solid/HandRock.Local.png) |




## HandRock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandRock
include('fontawesome-5/Solid/HandRock')

' renders the element
HandRock('HandRock', 'Hand Rock', 'an optional tech label')
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

' loads the Item which embeds the element HandRock
include('fontawesome-5/Solid/HandRock')

' renders the element
HandRock('HandRock', 'Hand Rock', 'an optional tech label')
@enduml
```

