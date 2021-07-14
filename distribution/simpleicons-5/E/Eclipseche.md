# Eclipseche


```text
simpleicons-5/E/Eclipseche
```

```text
include('simpleicons-5/E/Eclipseche')
```



| Illustration | Eclipseche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Eclipseche.png) | ![illustration for Eclipseche](../../simpleicons-5/E/Eclipseche.Local.png) |




## Eclipseche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons-5/E/Eclipseche')

' renders the element
Eclipseche('Eclipseche', 'Eclipseche', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons-5/E/Eclipseche')

' renders the element
Eclipseche('Eclipseche', 'Eclipseche', 'an optional tech label')
@enduml
```

