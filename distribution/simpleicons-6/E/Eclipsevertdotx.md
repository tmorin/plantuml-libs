# Eclipsevertdotx


```text
simpleicons-6/E/Eclipsevertdotx
```

```text
include('simpleicons-6/E/Eclipsevertdotx')
```



| Illustration | Eclipsevertdotx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Eclipsevertdotx.png) | ![illustration for Eclipsevertdotx](../../simpleicons-6/E/Eclipsevertdotx.Local.png) |




## Eclipsevertdotx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eclipsevertdotx
include('simpleicons-6/E/Eclipsevertdotx')

' renders the element
Eclipsevertdotx('Eclipsevertdotx', 'Eclipsevertdotx', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eclipsevertdotx
include('simpleicons-6/E/Eclipsevertdotx')

' renders the element
Eclipsevertdotx('Eclipsevertdotx', 'Eclipsevertdotx', 'an optional tech label')
@enduml
```

