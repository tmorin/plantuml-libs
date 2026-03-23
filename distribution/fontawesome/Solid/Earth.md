# Earth


```text
fontawesome/Solid/Earth
```

```text
include('fontawesome/Solid/Earth')
```



| Illustration | Earth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Earth.png) | ![illustration for Earth](../../fontawesome/Solid/Earth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EarthXs>`
- `<$EarthSm>`
- `<$EarthMd>`
- `<$EarthLg>`





## Earth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Earth
include('fontawesome/Solid/Earth')

' renders the element
Earth('Earth', 'Earth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Earth
include('fontawesome/Solid/Earth')

' renders the element
Earth('Earth', 'Earth', 'an optional tech label', 'an optional description')
@enduml
```

