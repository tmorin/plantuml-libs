# Teamspeak


```text
simpleicons-14/T/Teamspeak
```

```text
include('simpleicons-14/T/Teamspeak')
```



| Illustration | Teamspeak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Teamspeak.png) | ![illustration for Teamspeak](../../simpleicons-14/T/Teamspeak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TeamspeakXs>`
- `<$TeamspeakSm>`
- `<$TeamspeakMd>`
- `<$TeamspeakLg>`





## Teamspeak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Teamspeak
include('simpleicons-14/T/Teamspeak')

' renders the element
Teamspeak('Teamspeak', 'Teamspeak', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teamspeak
include('simpleicons-14/T/Teamspeak')

' renders the element
Teamspeak('Teamspeak', 'Teamspeak', 'an optional tech label', 'an optional description')
@enduml
```

