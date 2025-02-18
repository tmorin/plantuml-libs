# Sonarqube


```text
simpleicons-14/S/Sonarqube
```

```text
include('simpleicons-14/S/Sonarqube')
```



| Illustration | Sonarqube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonarqube.png) | ![illustration for Sonarqube](../../simpleicons-14/S/Sonarqube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarqubeXs>`
- `<$SonarqubeSm>`
- `<$SonarqubeMd>`
- `<$SonarqubeLg>`





## Sonarqube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarqube
include('simpleicons-14/S/Sonarqube')

' renders the element
Sonarqube('Sonarqube', 'Sonarqube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonarqube
include('simpleicons-14/S/Sonarqube')

' renders the element
Sonarqube('Sonarqube', 'Sonarqube', 'an optional tech label', 'an optional description')
@enduml
```

