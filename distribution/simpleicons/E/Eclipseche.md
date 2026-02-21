# Eclipseche


```text
simpleicons/E/Eclipseche
```

```text
include('simpleicons/E/Eclipseche')
```



| Illustration | Eclipseche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Eclipseche.png) | ![illustration for Eclipseche](../../simpleicons/E/Eclipseche.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EclipsecheXs>`
- `<$EclipsecheSm>`
- `<$EclipsecheMd>`
- `<$EclipsecheLg>`





## Eclipseche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons/E/Eclipseche')

' renders the element
Eclipseche('Eclipseche', 'Eclipseche', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons/E/Eclipseche')

' renders the element
Eclipseche('Eclipseche', 'Eclipseche', 'an optional tech label', 'an optional description')
@enduml
```

