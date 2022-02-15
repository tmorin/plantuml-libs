# HandSpock


```text
fontawesome-6/Regular/HandSpock
```

```text
include('fontawesome-6/Regular/HandSpock')
```



| Illustration | HandSpock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/HandSpock.png) | ![illustration for HandSpock](../../fontawesome-6/Regular/HandSpock.Local.png) |




## HandSpock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandSpock
include('fontawesome-6/Regular/HandSpock')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandSpock
include('fontawesome-6/Regular/HandSpock')

' renders the element
HandSpock('HandSpock', 'Hand Spock', 'an optional tech label')
@enduml
```

