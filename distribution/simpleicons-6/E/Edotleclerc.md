# Edotleclerc


```text
simpleicons-6/E/Edotleclerc
```

```text
include('simpleicons-6/E/Edotleclerc')
```



| Illustration | Edotleclerc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Edotleclerc.png) | ![illustration for Edotleclerc](../../simpleicons-6/E/Edotleclerc.Local.png) |




## Edotleclerc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Edotleclerc
include('simpleicons-6/E/Edotleclerc')

' renders the element
Edotleclerc('Edotleclerc', 'Edotleclerc', 'an optional tech label')
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

' loads the Item which embeds the element Edotleclerc
include('simpleicons-6/E/Edotleclerc')

' renders the element
Edotleclerc('Edotleclerc', 'Edotleclerc', 'an optional tech label')
@enduml
```

