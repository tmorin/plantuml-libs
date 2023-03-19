# Scrumalliance


```text
simpleicons-8/S/Scrumalliance
```

```text
include('simpleicons-8/S/Scrumalliance')
```



| Illustration | Scrumalliance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scrumalliance.png) | ![illustration for Scrumalliance](../../simpleicons-8/S/Scrumalliance.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scrumalliance
include('simpleicons-8/S/Scrumalliance')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scrumalliance
include('simpleicons-8/S/Scrumalliance')

' renders the element
Scrumalliance('Scrumalliance', 'Scrumalliance', 'an optional tech label', 'an optional description')
@enduml
```

