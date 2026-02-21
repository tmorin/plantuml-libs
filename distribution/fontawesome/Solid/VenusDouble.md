# VenusDouble


```text
fontawesome/Solid/VenusDouble
```

```text
include('fontawesome/Solid/VenusDouble')
```



| Illustration | VenusDouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VenusDouble.png) | ![illustration for VenusDouble](../../fontawesome/Solid/VenusDouble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VenusDoubleXs>`
- `<$VenusDoubleSm>`
- `<$VenusDoubleMd>`
- `<$VenusDoubleLg>`





## VenusDouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VenusDouble
include('fontawesome/Solid/VenusDouble')

' renders the element
VenusDouble('VenusDouble', 'Venus Double', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VenusDouble
include('fontawesome/Solid/VenusDouble')

' renders the element
VenusDouble('VenusDouble', 'Venus Double', 'an optional tech label', 'an optional description')
@enduml
```

