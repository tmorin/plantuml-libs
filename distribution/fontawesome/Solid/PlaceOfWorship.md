# PlaceOfWorship


```text
fontawesome/Solid/PlaceOfWorship
```

```text
include('fontawesome/Solid/PlaceOfWorship')
```



| Illustration | PlaceOfWorship |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlaceOfWorship.png) | ![illustration for PlaceOfWorship](../../fontawesome/Solid/PlaceOfWorship.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaceOfWorshipXs>`
- `<$PlaceOfWorshipSm>`
- `<$PlaceOfWorshipMd>`
- `<$PlaceOfWorshipLg>`





## PlaceOfWorship

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaceOfWorship
include('fontawesome/Solid/PlaceOfWorship')

' renders the element
PlaceOfWorship('PlaceOfWorship', 'Place Of Worship', 'an optional tech label', 'an optional description')
@enduml
```

