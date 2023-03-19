# Elementor


```text
simpleicons-8/E/Elementor
```

```text
include('simpleicons-8/E/Elementor')
```



| Illustration | Elementor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Elementor.png) | ![illustration for Elementor](../../simpleicons-8/E/Elementor.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Elementor
include('simpleicons-8/E/Elementor')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Elementor
include('simpleicons-8/E/Elementor')

' renders the element
Elementor('Elementor', 'Elementor', 'an optional tech label', 'an optional description')
@enduml
```

