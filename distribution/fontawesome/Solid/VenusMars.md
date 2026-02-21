# VenusMars


```text
fontawesome/Solid/VenusMars
```

```text
include('fontawesome/Solid/VenusMars')
```



| Illustration | VenusMars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VenusMars.png) | ![illustration for VenusMars](../../fontawesome/Solid/VenusMars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VenusMarsXs>`
- `<$VenusMarsSm>`
- `<$VenusMarsMd>`
- `<$VenusMarsLg>`





## VenusMars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VenusMars
include('fontawesome/Solid/VenusMars')

' renders the element
VenusMars('VenusMars', 'Venus Mars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VenusMars
include('fontawesome/Solid/VenusMars')

' renders the element
VenusMars('VenusMars', 'Venus Mars', 'an optional tech label', 'an optional description')
@enduml
```

