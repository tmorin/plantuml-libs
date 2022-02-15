# Styleshare


```text
simpleicons-6/S/Styleshare
```

```text
include('simpleicons-6/S/Styleshare')
```



| Illustration | Styleshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Styleshare.png) | ![illustration for Styleshare](../../simpleicons-6/S/Styleshare.Local.png) |




## Styleshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Styleshare
include('simpleicons-6/S/Styleshare')

' renders the element
Styleshare('Styleshare', 'Styleshare', 'an optional tech label')
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

' loads the Item which embeds the element Styleshare
include('simpleicons-6/S/Styleshare')

' renders the element
Styleshare('Styleshare', 'Styleshare', 'an optional tech label')
@enduml
```

