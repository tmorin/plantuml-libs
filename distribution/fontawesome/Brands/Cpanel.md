# Cpanel


```text
fontawesome/Brands/Cpanel
```

```text
include('fontawesome/Brands/Cpanel')
```



| Illustration | Cpanel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Cpanel.png) | ![illustration for Cpanel](../../fontawesome/Brands/Cpanel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CpanelXs>`
- `<$CpanelSm>`
- `<$CpanelMd>`
- `<$CpanelLg>`





## Cpanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cpanel
include('fontawesome/Brands/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cpanel
include('fontawesome/Brands/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label', 'an optional description')
@enduml
```

