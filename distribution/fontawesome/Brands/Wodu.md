# Wodu


```text
fontawesome/Brands/Wodu
```

```text
include('fontawesome/Brands/Wodu')
```



| Illustration | Wodu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Wodu.png) | ![illustration for Wodu](../../fontawesome/Brands/Wodu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WoduXs>`
- `<$WoduSm>`
- `<$WoduMd>`
- `<$WoduLg>`





## Wodu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wodu
include('fontawesome/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wodu
include('fontawesome/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label', 'an optional description')
@enduml
```

