# Styleshare


```text
simpleicons-5/S/Styleshare
```

```text
include('simpleicons-5/S/Styleshare')
```



| Illustration | Styleshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Styleshare.png) | ![illustration for Styleshare](../../simpleicons-5/S/Styleshare.Local.png) |




## Styleshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Styleshare
include('simpleicons-5/S/Styleshare')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Styleshare
include('simpleicons-5/S/Styleshare')

' renders the element
Styleshare('Styleshare', 'Styleshare', 'an optional tech label')
@enduml
```

