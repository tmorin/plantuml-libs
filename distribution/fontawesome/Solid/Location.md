# Location


```text
fontawesome/Solid/Location
```

```text
include('fontawesome/Solid/Location')
```



| Illustration | Location |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Location.png) | ![illustration for Location](../../fontawesome/Solid/Location.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationXs>`
- `<$LocationSm>`
- `<$LocationMd>`
- `<$LocationLg>`





## Location

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Location
include('fontawesome/Solid/Location')

' renders the element
Location('Location', 'Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Location
include('fontawesome/Solid/Location')

' renders the element
Location('Location', 'Location', 'an optional tech label', 'an optional description')
@enduml
```

