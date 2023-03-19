# Compass


```text
fontawesome-6/Solid/Compass
```

```text
include('fontawesome-6/Solid/Compass')
```



| Illustration | Compass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Compass.png) | ![illustration for Compass](../../fontawesome-6/Solid/Compass.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompassXs>`
- `<$CompassSm>`
- `<$CompassMd>`
- `<$CompassLg>`





## Compass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Compass
include('fontawesome-6/Solid/Compass')

' renders the element
Compass('Compass', 'Compass', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Compass
include('fontawesome-6/Solid/Compass')

' renders the element
Compass('Compass', 'Compass', 'an optional tech label', 'an optional description')
@enduml
```

