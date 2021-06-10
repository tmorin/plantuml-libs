# Elementor


```text
fontawesome-5/Brands/Elementor
```

```text
include('fontawesome-5/Brands/Elementor')
```



| Illustration | Elementor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Elementor.png) | ![illustration for Elementor](../../fontawesome-5/Brands/Elementor.Local.png) |




## Elementor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Elementor
include('fontawesome-5/Brands/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Elementor
include('fontawesome-5/Brands/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label')
@enduml
```

