# Microsoftteams


```text
simpleicons-14/M/Microsoftteams
```

```text
include('simpleicons-14/M/Microsoftteams')
```



| Illustration | Microsoftteams |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microsoftteams.png) | ![illustration for Microsoftteams](../../simpleicons-14/M/Microsoftteams.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrosoftteamsXs>`
- `<$MicrosoftteamsSm>`
- `<$MicrosoftteamsMd>`
- `<$MicrosoftteamsLg>`





## Microsoftteams

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microsoftteams
include('simpleicons-14/M/Microsoftteams')

' renders the element
Microsoftteams('Microsoftteams', 'Microsoftteams', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftteams
include('simpleicons-14/M/Microsoftteams')

' renders the element
Microsoftteams('Microsoftteams', 'Microsoftteams', 'an optional tech label', 'an optional description')
@enduml
```

