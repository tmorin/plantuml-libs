# Sonarcloud


```text
simpleicons-14/S/Sonarcloud
```

```text
include('simpleicons-14/S/Sonarcloud')
```



| Illustration | Sonarcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonarcloud.png) | ![illustration for Sonarcloud](../../simpleicons-14/S/Sonarcloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarcloudXs>`
- `<$SonarcloudSm>`
- `<$SonarcloudMd>`
- `<$SonarcloudLg>`





## Sonarcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonarcloud
include('simpleicons-14/S/Sonarcloud')

' renders the element
Sonarcloud('Sonarcloud', 'Sonarcloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonarcloud
include('simpleicons-14/S/Sonarcloud')

' renders the element
Sonarcloud('Sonarcloud', 'Sonarcloud', 'an optional tech label', 'an optional description')
@enduml
```

