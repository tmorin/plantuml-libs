# HandPeace


```text
fontawesome-6/Regular/HandPeace
```

```text
include('fontawesome-6/Regular/HandPeace')
```



| Illustration | HandPeace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/HandPeace.png) | ![illustration for HandPeace](../../fontawesome-6/Regular/HandPeace.Local.png) |




## HandPeace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandPeace
include('fontawesome-6/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPeace
include('fontawesome-6/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label', 'an optional description')
@enduml
```

