# Vuetify


```text
simpleicons-8/V/Vuetify
```

```text
include('simpleicons-8/V/Vuetify')
```



| Illustration | Vuetify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vuetify.png) | ![illustration for Vuetify](../../simpleicons-8/V/Vuetify.Local.png) |




## Vuetify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vuetify
include('simpleicons-8/V/Vuetify')

' renders the element
Vuetify('Vuetify', 'Vuetify', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vuetify
include('simpleicons-8/V/Vuetify')

' renders the element
Vuetify('Vuetify', 'Vuetify', 'an optional tech label', 'an optional description')
@enduml
```

