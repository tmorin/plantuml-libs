# Whmcs


```text
fontawesome/Brands/Whmcs
```

```text
include('fontawesome/Brands/Whmcs')
```



| Illustration | Whmcs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Whmcs.png) | ![illustration for Whmcs](../../fontawesome/Brands/Whmcs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WhmcsXs>`
- `<$WhmcsSm>`
- `<$WhmcsMd>`
- `<$WhmcsLg>`





## Whmcs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Whmcs
include('fontawesome/Brands/Whmcs')

' renders the element
Whmcs('Whmcs', 'Whmcs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Whmcs
include('fontawesome/Brands/Whmcs')

' renders the element
Whmcs('Whmcs', 'Whmcs', 'an optional tech label', 'an optional description')
@enduml
```

