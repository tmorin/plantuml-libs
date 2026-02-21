# Sonarqubeserver


```text
simpleicons-14/S/Sonarqubeserver
```

```text
include('simpleicons-14/S/Sonarqubeserver')
```



| Illustration | Sonarqubeserver |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonarqubeserver.png) | ![illustration for Sonarqubeserver](../../simpleicons-14/S/Sonarqubeserver.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarqubeserver
include('simpleicons-14/S/Sonarqubeserver')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarqubeserver
include('simpleicons-14/S/Sonarqubeserver')

' renders the element
Sonarqubeserver('Sonarqubeserver', 'Sonarqubeserver', 'an optional tech label', 'an optional description')
@enduml
```

