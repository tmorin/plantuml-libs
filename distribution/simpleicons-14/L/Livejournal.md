# Livejournal


```text
simpleicons-14/L/Livejournal
```

```text
include('simpleicons-14/L/Livejournal')
```



| Illustration | Livejournal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Livejournal.png) | ![illustration for Livejournal](../../simpleicons-14/L/Livejournal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LivejournalXs>`
- `<$LivejournalSm>`
- `<$LivejournalMd>`
- `<$LivejournalLg>`





## Livejournal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Livejournal
include('simpleicons-14/L/Livejournal')

' renders the element
Livejournal('Livejournal', 'Livejournal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Livejournal
include('simpleicons-14/L/Livejournal')

' renders the element
Livejournal('Livejournal', 'Livejournal', 'an optional tech label', 'an optional description')
@enduml
```

