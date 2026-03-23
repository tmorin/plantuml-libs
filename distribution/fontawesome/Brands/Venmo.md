# Venmo


```text
fontawesome/Brands/Venmo
```

```text
include('fontawesome/Brands/Venmo')
```



| Illustration | Venmo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Venmo.png) | ![illustration for Venmo](../../fontawesome/Brands/Venmo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VenmoXs>`
- `<$VenmoSm>`
- `<$VenmoMd>`
- `<$VenmoLg>`





## Venmo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Venmo
include('fontawesome/Brands/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Venmo
include('fontawesome/Brands/Venmo')

' renders the element
Venmo('Venmo', 'Venmo', 'an optional tech label', 'an optional description')
@enduml
```

