# Elementor


```text
fontawesome/Brands/Elementor
```

```text
include('fontawesome/Brands/Elementor')
```



| Illustration | Elementor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Elementor.png) | ![illustration for Elementor](../../fontawesome/Brands/Elementor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElementorXs>`
- `<$ElementorSm>`
- `<$ElementorMd>`
- `<$ElementorLg>`





## Elementor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Elementor
include('fontawesome/Brands/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elementor
include('fontawesome/Brands/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label', 'an optional description')
@enduml
```

