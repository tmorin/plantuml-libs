# Eclipseche


```text
simpleicons-7/E/Eclipseche
```

```text
include('simpleicons-7/E/Eclipseche')
```



| Illustration | Eclipseche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Eclipseche.png) | ![illustration for Eclipseche](../../simpleicons-7/E/Eclipseche.Local.png) |




## Eclipseche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons-7/E/Eclipseche')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Eclipseche
include('simpleicons-7/E/Eclipseche')

' renders the element
Eclipseche('Eclipseche', 'Eclipseche', 'an optional tech label')
@enduml
```

