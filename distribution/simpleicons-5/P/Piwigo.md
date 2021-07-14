# Piwigo


```text
simpleicons-5/P/Piwigo
```

```text
include('simpleicons-5/P/Piwigo')
```



| Illustration | Piwigo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Piwigo.png) | ![illustration for Piwigo](../../simpleicons-5/P/Piwigo.Local.png) |




## Piwigo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Piwigo
include('simpleicons-5/P/Piwigo')

' renders the element
Piwigo('Piwigo', 'Piwigo', 'an optional tech label')
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

' loads the Item which embeds the element Piwigo
include('simpleicons-5/P/Piwigo')

' renders the element
Piwigo('Piwigo', 'Piwigo', 'an optional tech label')
@enduml
```

