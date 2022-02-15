# Aurelia


```text
simpleicons-6/A/Aurelia
```

```text
include('simpleicons-6/A/Aurelia')
```



| Illustration | Aurelia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aurelia.png) | ![illustration for Aurelia](../../simpleicons-6/A/Aurelia.Local.png) |




## Aurelia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aurelia
include('simpleicons-6/A/Aurelia')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aurelia
include('simpleicons-6/A/Aurelia')

' renders the element
Aurelia('Aurelia', 'Aurelia', 'an optional tech label')
@enduml
```

