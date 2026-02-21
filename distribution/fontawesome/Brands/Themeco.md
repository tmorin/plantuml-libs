# Themeco


```text
fontawesome/Brands/Themeco
```

```text
include('fontawesome/Brands/Themeco')
```



| Illustration | Themeco |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Themeco.png) | ![illustration for Themeco](../../fontawesome/Brands/Themeco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThemecoXs>`
- `<$ThemecoSm>`
- `<$ThemecoMd>`
- `<$ThemecoLg>`





## Themeco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Themeco
include('fontawesome/Brands/Themeco')

' renders the element
Themeco('Themeco', 'Themeco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Themeco
include('fontawesome/Brands/Themeco')

' renders the element
Themeco('Themeco', 'Themeco', 'an optional tech label', 'an optional description')
@enduml
```

