# JournalWhills


```text
fontawesome-5/Solid/JournalWhills
```

```text
include('fontawesome-5/Solid/JournalWhills')
```



| Illustration | JournalWhills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/JournalWhills.png) | ![illustration for JournalWhills](../../fontawesome-5/Solid/JournalWhills.Local.png) |




## JournalWhills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element JournalWhills
include('fontawesome-5/Solid/JournalWhills')

' renders the element
JournalWhills('JournalWhills', 'Journal Whills', 'an optional tech label')
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

' loads the Item which embeds the element JournalWhills
include('fontawesome-5/Solid/JournalWhills')

' renders the element
JournalWhills('JournalWhills', 'Journal Whills', 'an optional tech label')
@enduml
```

