# Gears


```text
fontawesome/Solid/Gears
```

```text
include('fontawesome/Solid/Gears')
```



| Illustration | Gears |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gears.png) | ![illustration for Gears](../../fontawesome/Solid/Gears.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GearsXs>`
- `<$GearsSm>`
- `<$GearsMd>`
- `<$GearsLg>`





## Gears

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gears
include('fontawesome/Solid/Gears')

' renders the element
Gears('Gears', 'Gears', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gears
include('fontawesome/Solid/Gears')

' renders the element
Gears('Gears', 'Gears', 'an optional tech label', 'an optional description')
@enduml
```

