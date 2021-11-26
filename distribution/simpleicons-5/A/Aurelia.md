# Aurelia


```text
simpleicons-5/A/Aurelia
```

```text
include('simpleicons-5/A/Aurelia')
```



| Illustration | Aurelia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aurelia.png) | ![illustration for Aurelia](../../simpleicons-5/A/Aurelia.Local.png) |




## Aurelia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aurelia
include('simpleicons-5/A/Aurelia')

' renders the element
Aurelia('Aurelia', 'Aurelia', 'an optional tech label')
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

' loads the Item which embeds the element Aurelia
include('simpleicons-5/A/Aurelia')

' renders the element
Aurelia('Aurelia', 'Aurelia', 'an optional tech label')
@enduml
```

