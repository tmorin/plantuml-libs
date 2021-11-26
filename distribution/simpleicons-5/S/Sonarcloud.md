# Sonarcloud


```text
simpleicons-5/S/Sonarcloud
```

```text
include('simpleicons-5/S/Sonarcloud')
```



| Illustration | Sonarcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sonarcloud.png) | ![illustration for Sonarcloud](../../simpleicons-5/S/Sonarcloud.Local.png) |




## Sonarcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sonarcloud
include('simpleicons-5/S/Sonarcloud')

' renders the element
Sonarcloud('Sonarcloud', 'Sonarcloud', 'an optional tech label')
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

' loads the Item which embeds the element Sonarcloud
include('simpleicons-5/S/Sonarcloud')

' renders the element
Sonarcloud('Sonarcloud', 'Sonarcloud', 'an optional tech label')
@enduml
```

