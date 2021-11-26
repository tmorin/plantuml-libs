# HandPeace


```text
fontawesome-5/Regular/HandPeace
```

```text
include('fontawesome-5/Regular/HandPeace')
```



| Illustration | HandPeace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/HandPeace.png) | ![illustration for HandPeace](../../fontawesome-5/Regular/HandPeace.Local.png) |




## HandPeace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPeace
include('fontawesome-5/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label')
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

' loads the Item which embeds the element HandPeace
include('fontawesome-5/Regular/HandPeace')

' renders the element
HandPeace('HandPeace', 'Hand Peace', 'an optional tech label')
@enduml
```

