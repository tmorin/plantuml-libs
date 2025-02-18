# Rhinoceros


```text
simpleicons-14/R/Rhinoceros
```

```text
include('simpleicons-14/R/Rhinoceros')
```



| Illustration | Rhinoceros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rhinoceros.png) | ![illustration for Rhinoceros](../../simpleicons-14/R/Rhinoceros.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RhinocerosXs>`
- `<$RhinocerosSm>`
- `<$RhinocerosMd>`
- `<$RhinocerosLg>`





## Rhinoceros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rhinoceros
include('simpleicons-14/R/Rhinoceros')

' renders the element
Rhinoceros('Rhinoceros', 'Rhinoceros', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rhinoceros
include('simpleicons-14/R/Rhinoceros')

' renders the element
Rhinoceros('Rhinoceros', 'Rhinoceros', 'an optional tech label', 'an optional description')
@enduml
```

