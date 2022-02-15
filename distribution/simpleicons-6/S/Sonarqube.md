# Sonarqube


```text
simpleicons-6/S/Sonarqube
```

```text
include('simpleicons-6/S/Sonarqube')
```



| Illustration | Sonarqube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sonarqube.png) | ![illustration for Sonarqube](../../simpleicons-6/S/Sonarqube.Local.png) |




## Sonarqube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sonarqube
include('simpleicons-6/S/Sonarqube')

' renders the element
Sonarqube('Sonarqube', 'Sonarqube', 'an optional tech label')
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

' loads the Item which embeds the element Sonarqube
include('simpleicons-6/S/Sonarqube')

' renders the element
Sonarqube('Sonarqube', 'Sonarqube', 'an optional tech label')
@enduml
```

