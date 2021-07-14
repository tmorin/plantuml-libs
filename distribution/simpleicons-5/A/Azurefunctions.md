# Azurefunctions


```text
simpleicons-5/A/Azurefunctions
```

```text
include('simpleicons-5/A/Azurefunctions')
```



| Illustration | Azurefunctions |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Azurefunctions.png) | ![illustration for Azurefunctions](../../simpleicons-5/A/Azurefunctions.Local.png) |




## Azurefunctions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Azurefunctions
include('simpleicons-5/A/Azurefunctions')

' renders the element
Azurefunctions('Azurefunctions', 'Azurefunctions', 'an optional tech label')
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

' loads the Item which embeds the element Azurefunctions
include('simpleicons-5/A/Azurefunctions')

' renders the element
Azurefunctions('Azurefunctions', 'Azurefunctions', 'an optional tech label')
@enduml
```

