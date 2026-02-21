# Restroom


```text
fontawesome/Solid/Restroom
```

```text
include('fontawesome/Solid/Restroom')
```



| Illustration | Restroom |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Restroom.png) | ![illustration for Restroom](../../fontawesome/Solid/Restroom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestroomXs>`
- `<$RestroomSm>`
- `<$RestroomMd>`
- `<$RestroomLg>`





## Restroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Restroom
include('fontawesome/Solid/Restroom')

' renders the element
Restroom('Restroom', 'Restroom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Restroom
include('fontawesome/Solid/Restroom')

' renders the element
Restroom('Restroom', 'Restroom', 'an optional tech label', 'an optional description')
@enduml
```

