# Eclipseide


```text
simpleicons-14/E/Eclipseide
```

```text
include('simpleicons-14/E/Eclipseide')
```



| Illustration | Eclipseide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eclipseide.png) | ![illustration for Eclipseide](../../simpleicons-14/E/Eclipseide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EclipseideXs>`
- `<$EclipseideSm>`
- `<$EclipseideMd>`
- `<$EclipseideLg>`





## Eclipseide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eclipseide
include('simpleicons-14/E/Eclipseide')

' renders the element
Eclipseide('Eclipseide', 'Eclipseide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eclipseide
include('simpleicons-14/E/Eclipseide')

' renders the element
Eclipseide('Eclipseide', 'Eclipseide', 'an optional tech label', 'an optional description')
@enduml
```

