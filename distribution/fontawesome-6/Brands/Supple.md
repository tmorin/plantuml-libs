# Supple


```text
fontawesome-6/Brands/Supple
```

```text
include('fontawesome-6/Brands/Supple')
```



| Illustration | Supple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Supple.png) | ![illustration for Supple](../../fontawesome-6/Brands/Supple.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Supple
include('fontawesome-6/Brands/Supple')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Supple
include('fontawesome-6/Brands/Supple')

' renders the element
Supple('Supple', 'Supple', 'an optional tech label', 'an optional description')
@enduml
```

