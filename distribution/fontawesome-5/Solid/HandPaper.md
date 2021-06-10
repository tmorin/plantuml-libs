# HandPaper


```text
fontawesome-5/Solid/HandPaper
```

```text
include('fontawesome-5/Solid/HandPaper')
```



| Illustration | HandPaper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandPaper.png) | ![illustration for HandPaper](../../fontawesome-5/Solid/HandPaper.Local.png) |




## HandPaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandPaper
include('fontawesome-5/Solid/HandPaper')

' renders the element
HandPaper('HandPaper', 'Hand Paper', 'an optional tech label')
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

' loads the Item which embeds the element HandPaper
include('fontawesome-5/Solid/HandPaper')

' renders the element
HandPaper('HandPaper', 'Hand Paper', 'an optional tech label')
@enduml
```

