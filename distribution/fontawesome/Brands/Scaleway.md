# Scaleway


```text
fontawesome/Brands/Scaleway
```

```text
include('fontawesome/Brands/Scaleway')
```



| Illustration | Scaleway |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Scaleway.png) | ![illustration for Scaleway](../../fontawesome/Brands/Scaleway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScalewayXs>`
- `<$ScalewaySm>`
- `<$ScalewayMd>`
- `<$ScalewayLg>`





## Scaleway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Scaleway
include('fontawesome/Brands/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scaleway
include('fontawesome/Brands/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label', 'an optional description')
@enduml
```

