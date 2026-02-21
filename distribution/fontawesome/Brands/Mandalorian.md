# Mandalorian


```text
fontawesome/Brands/Mandalorian
```

```text
include('fontawesome/Brands/Mandalorian')
```



| Illustration | Mandalorian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mandalorian.png) | ![illustration for Mandalorian](../../fontawesome/Brands/Mandalorian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MandalorianXs>`
- `<$MandalorianSm>`
- `<$MandalorianMd>`
- `<$MandalorianLg>`





## Mandalorian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mandalorian
include('fontawesome/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mandalorian
include('fontawesome/Brands/Mandalorian')

' renders the element
Mandalorian('Mandalorian', 'Mandalorian', 'an optional tech label', 'an optional description')
@enduml
```

