# PeopleRoof


```text
fontawesome/Solid/PeopleRoof
```

```text
include('fontawesome/Solid/PeopleRoof')
```



| Illustration | PeopleRoof |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PeopleRoof.png) | ![illustration for PeopleRoof](../../fontawesome/Solid/PeopleRoof.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleRoofXs>`
- `<$PeopleRoofSm>`
- `<$PeopleRoofMd>`
- `<$PeopleRoofLg>`





## PeopleRoof

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PeopleRoof
include('fontawesome/Solid/PeopleRoof')

' renders the element
PeopleRoof('PeopleRoof', 'People Roof', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleRoof
include('fontawesome/Solid/PeopleRoof')

' renders the element
PeopleRoof('PeopleRoof', 'People Roof', 'an optional tech label', 'an optional description')
@enduml
```

