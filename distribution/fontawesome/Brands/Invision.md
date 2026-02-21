# Invision


```text
fontawesome/Brands/Invision
```

```text
include('fontawesome/Brands/Invision')
```



| Illustration | Invision |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Invision.png) | ![illustration for Invision](../../fontawesome/Brands/Invision.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InvisionXs>`
- `<$InvisionSm>`
- `<$InvisionMd>`
- `<$InvisionLg>`





## Invision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Invision
include('fontawesome/Brands/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Invision
include('fontawesome/Brands/Invision')

' renders the element
Invision('Invision', 'Invision', 'an optional tech label', 'an optional description')
@enduml
```

