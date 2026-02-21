# Archiveofourown


```text
simpleicons/A/Archiveofourown
```

```text
include('simpleicons/A/Archiveofourown')
```



| Illustration | Archiveofourown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Archiveofourown.png) | ![illustration for Archiveofourown](../../simpleicons/A/Archiveofourown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchiveofourownXs>`
- `<$ArchiveofourownSm>`
- `<$ArchiveofourownMd>`
- `<$ArchiveofourownLg>`





## Archiveofourown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Archiveofourown
include('simpleicons/A/Archiveofourown')

' renders the element
Archiveofourown('Archiveofourown', 'Archiveofourown', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Archiveofourown
include('simpleicons/A/Archiveofourown')

' renders the element
Archiveofourown('Archiveofourown', 'Archiveofourown', 'an optional tech label', 'an optional description')
@enduml
```

