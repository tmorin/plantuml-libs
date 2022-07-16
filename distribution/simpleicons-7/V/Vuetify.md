# Vuetify


```text
simpleicons-7/V/Vuetify
```

```text
include('simpleicons-7/V/Vuetify')
```



| Illustration | Vuetify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vuetify.png) | ![illustration for Vuetify](../../simpleicons-7/V/Vuetify.Local.png) |




## Vuetify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vuetify
include('simpleicons-7/V/Vuetify')

' renders the element
Vuetify('Vuetify', 'Vuetify', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vuetify
include('simpleicons-7/V/Vuetify')

' renders the element
Vuetify('Vuetify', 'Vuetify', 'an optional tech label')
@enduml
```

