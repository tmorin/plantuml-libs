# Elementor


```text
simpleicons-7/E/Elementor
```

```text
include('simpleicons-7/E/Elementor')
```



| Illustration | Elementor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Elementor.png) | ![illustration for Elementor](../../simpleicons-7/E/Elementor.Local.png) |




## Elementor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Elementor
include('simpleicons-7/E/Elementor')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Elementor
include('simpleicons-7/E/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label', 'an optional description')
@enduml
```

