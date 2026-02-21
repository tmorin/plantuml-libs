# Sonarqubecloud


```text
simpleicons-14/S/Sonarqubecloud
```

```text
include('simpleicons-14/S/Sonarqubecloud')
```



| Illustration | Sonarqubecloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonarqubecloud.png) | ![illustration for Sonarqubecloud](../../simpleicons-14/S/Sonarqubecloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarqubecloudXs>`
- `<$SonarqubecloudSm>`
- `<$SonarqubecloudMd>`
- `<$SonarqubecloudLg>`





## Sonarqubecloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarqubecloud
include('simpleicons-14/S/Sonarqubecloud')

' renders the element
Sonarqubecloud('Sonarqubecloud', 'Sonarqubecloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonarqubecloud
include('simpleicons-14/S/Sonarqubecloud')

' renders the element
Sonarqubecloud('Sonarqubecloud', 'Sonarqubecloud', 'an optional tech label', 'an optional description')
@enduml
```

