# Umbraco


```text
simpleicons-5/U/Umbraco
```

```text
include('simpleicons-5/U/Umbraco')
```



| Illustration | Umbraco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Umbraco.png) | ![illustration for Umbraco](../../simpleicons-5/U/Umbraco.Local.png) |




## Umbraco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Umbraco
include('simpleicons-5/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
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

' loads the Item which embeds the element Umbraco
include('simpleicons-5/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
@enduml
```

