# Supple


```text
fontawesome/Brands/Supple
```

```text
include('fontawesome/Brands/Supple')
```



| Illustration | Supple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Supple.png) | ![illustration for Supple](../../fontawesome/Brands/Supple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuppleXs>`
- `<$SuppleSm>`
- `<$SuppleMd>`
- `<$SuppleLg>`





## Supple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Supple
include('fontawesome/Brands/Supple')

' renders the element
Supple('Supple', 'Supple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Supple
include('fontawesome/Brands/Supple')

' renders the element
Supple('Supple', 'Supple', 'an optional tech label', 'an optional description')
@enduml
```

