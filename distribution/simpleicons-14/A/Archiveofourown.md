# Archiveofourown


```text
simpleicons-14/A/Archiveofourown
```

```text
include('simpleicons-14/A/Archiveofourown')
```



| Illustration | Archiveofourown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Archiveofourown.png) | ![illustration for Archiveofourown](../../simpleicons-14/A/Archiveofourown.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Archiveofourown
include('simpleicons-14/A/Archiveofourown')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Archiveofourown
include('simpleicons-14/A/Archiveofourown')

' renders the element
Archiveofourown('Archiveofourown', 'Archiveofourown', 'an optional tech label', 'an optional description')
@enduml
```

