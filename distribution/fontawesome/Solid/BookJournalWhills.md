# BookJournalWhills


```text
fontawesome/Solid/BookJournalWhills
```

```text
include('fontawesome/Solid/BookJournalWhills')
```



| Illustration | BookJournalWhills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookJournalWhills.png) | ![illustration for BookJournalWhills](../../fontawesome/Solid/BookJournalWhills.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookJournalWhillsXs>`
- `<$BookJournalWhillsSm>`
- `<$BookJournalWhillsMd>`
- `<$BookJournalWhillsLg>`





## BookJournalWhills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookJournalWhills
include('fontawesome/Solid/BookJournalWhills')

' renders the element
BookJournalWhills('BookJournalWhills', 'Book Journal Whills', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookJournalWhills
include('fontawesome/Solid/BookJournalWhills')

' renders the element
BookJournalWhills('BookJournalWhills', 'Book Journal Whills', 'an optional tech label', 'an optional description')
@enduml
```

