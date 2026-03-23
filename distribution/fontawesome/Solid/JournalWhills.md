# JournalWhills


```text
fontawesome/Solid/JournalWhills
```

```text
include('fontawesome/Solid/JournalWhills')
```



| Illustration | JournalWhills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/JournalWhills.png) | ![illustration for JournalWhills](../../fontawesome/Solid/JournalWhills.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JournalWhillsXs>`
- `<$JournalWhillsSm>`
- `<$JournalWhillsMd>`
- `<$JournalWhillsLg>`





## JournalWhills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JournalWhills
include('fontawesome/Solid/JournalWhills')

' renders the element
JournalWhills('JournalWhills', 'Journal Whills', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element JournalWhills
include('fontawesome/Solid/JournalWhills')

' renders the element
JournalWhills('JournalWhills', 'Journal Whills', 'an optional tech label', 'an optional description')
@enduml
```

