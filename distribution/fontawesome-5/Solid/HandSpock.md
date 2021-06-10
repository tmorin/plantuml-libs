# HandSpock


```text
fontawesome-5/Solid/HandSpock
```

```text
include('fontawesome-5/Solid/HandSpock')
```



| Illustration | HandSpock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandSpock.png) | ![illustration for HandSpock](../../fontawesome-5/Solid/HandSpock.Local.png) |




## HandSpock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandSpock
include('fontawesome-5/Solid/HandSpock')

' renders the element
HandSpock('HandSpock', 'Hand Spock', 'an optional tech label')
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

' loads the Item which embeds the element HandSpock
include('fontawesome-5/Solid/HandSpock')

' renders the element
HandSpock('HandSpock', 'Hand Spock', 'an optional tech label')
@enduml
```

