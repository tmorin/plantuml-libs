# Dolibarr


```text
fontawesome/Brands/Dolibarr
```

```text
include('fontawesome/Brands/Dolibarr')
```



| Illustration | Dolibarr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Dolibarr.png) | ![illustration for Dolibarr](../../fontawesome/Brands/Dolibarr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DolibarrXs>`
- `<$DolibarrSm>`
- `<$DolibarrMd>`
- `<$DolibarrLg>`





## Dolibarr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dolibarr
include('fontawesome/Brands/Dolibarr')

' renders the element
Dolibarr('Dolibarr', 'Dolibarr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dolibarr
include('fontawesome/Brands/Dolibarr')

' renders the element
Dolibarr('Dolibarr', 'Dolibarr', 'an optional tech label', 'an optional description')
@enduml
```

