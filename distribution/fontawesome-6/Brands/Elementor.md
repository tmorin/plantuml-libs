# Elementor


```text
fontawesome-6/Brands/Elementor
```

```text
include('fontawesome-6/Brands/Elementor')
```



| Illustration | Elementor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Elementor.png) | ![illustration for Elementor](../../fontawesome-6/Brands/Elementor.Local.png) |




## Elementor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Elementor
include('fontawesome-6/Brands/Elementor')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Elementor
include('fontawesome-6/Brands/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label')
@enduml
```

