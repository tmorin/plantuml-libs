# Stumbleupon


```text
fontawesome/Brands/Stumbleupon
```

```text
include('fontawesome/Brands/Stumbleupon')
```



| Illustration | Stumbleupon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Stumbleupon.png) | ![illustration for Stumbleupon](../../fontawesome/Brands/Stumbleupon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StumbleuponXs>`
- `<$StumbleuponSm>`
- `<$StumbleuponMd>`
- `<$StumbleuponLg>`





## Stumbleupon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stumbleupon
include('fontawesome/Brands/Stumbleupon')

' renders the element
Stumbleupon('Stumbleupon', 'Stumbleupon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stumbleupon
include('fontawesome/Brands/Stumbleupon')

' renders the element
Stumbleupon('Stumbleupon', 'Stumbleupon', 'an optional tech label', 'an optional description')
@enduml
```

