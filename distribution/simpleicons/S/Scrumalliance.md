# Scrumalliance


```text
simpleicons/S/Scrumalliance
```

```text
include('simpleicons/S/Scrumalliance')
```



| Illustration | Scrumalliance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Scrumalliance.png) | ![illustration for Scrumalliance](../../simpleicons/S/Scrumalliance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrumallianceXs>`
- `<$ScrumallianceSm>`
- `<$ScrumallianceMd>`
- `<$ScrumallianceLg>`





## Scrumalliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Scrumalliance
include('simpleicons/S/Scrumalliance')

' renders the element
Scrumalliance('Scrumalliance', 'Scrumalliance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scrumalliance
include('simpleicons/S/Scrumalliance')

' renders the element
Scrumalliance('Scrumalliance', 'Scrumalliance', 'an optional tech label', 'an optional description')
@enduml
```

