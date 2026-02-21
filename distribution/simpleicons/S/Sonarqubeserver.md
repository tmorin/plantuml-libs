# Sonarqubeserver


```text
simpleicons/S/Sonarqubeserver
```

```text
include('simpleicons/S/Sonarqubeserver')
```



| Illustration | Sonarqubeserver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sonarqubeserver.png) | ![illustration for Sonarqubeserver](../../simpleicons/S/Sonarqubeserver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarqubeserverXs>`
- `<$SonarqubeserverSm>`
- `<$SonarqubeserverMd>`
- `<$SonarqubeserverLg>`





## Sonarqubeserver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sonarqubeserver
include('simpleicons/S/Sonarqubeserver')

' renders the element
Sonarqubeserver('Sonarqubeserver', 'Sonarqubeserver', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonarqubeserver
include('simpleicons/S/Sonarqubeserver')

' renders the element
Sonarqubeserver('Sonarqubeserver', 'Sonarqubeserver', 'an optional tech label', 'an optional description')
@enduml
```

