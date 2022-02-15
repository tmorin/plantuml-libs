# Piwigo


```text
simpleicons-6/P/Piwigo
```

```text
include('simpleicons-6/P/Piwigo')
```



| Illustration | Piwigo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Piwigo.png) | ![illustration for Piwigo](../../simpleicons-6/P/Piwigo.Local.png) |




## Piwigo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Piwigo
include('simpleicons-6/P/Piwigo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Piwigo
include('simpleicons-6/P/Piwigo')

' renders the element
Piwigo('Piwigo', 'Piwigo', 'an optional tech label')
@enduml
```

