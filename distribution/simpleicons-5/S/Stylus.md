# Stylus


```text
simpleicons-5/S/Stylus
```

```text
include('simpleicons-5/S/Stylus')
```



| Illustration | Stylus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Stylus.png) | ![illustration for Stylus](../../simpleicons-5/S/Stylus.Local.png) |




## Stylus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Stylus
include('simpleicons-5/S/Stylus')

' renders the element
Stylus('Stylus', 'Stylus', 'an optional tech label')
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

' loads the Item which embeds the element Stylus
include('simpleicons-5/S/Stylus')

' renders the element
Stylus('Stylus', 'Stylus', 'an optional tech label')
@enduml
```

