# HandRock


```text
fontawesome-5/Regular/HandRock
```

```text
include('fontawesome-5/Regular/HandRock')
```



| Illustration | HandRock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/HandRock.png) | ![illustration for HandRock](../../fontawesome-5/Regular/HandRock.Local.png) |




## HandRock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandRock
include('fontawesome-5/Regular/HandRock')

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
include('fontawesome-5/Regular/HandRock')

' renders the element
HandRock('HandRock', 'Hand Rock', 'an optional tech label')
@enduml
```

