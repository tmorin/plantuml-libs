# Starz


```text
simpleicons-6/S/Starz
```

```text
include('simpleicons-6/S/Starz')
```



| Illustration | Starz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Starz.png) | ![illustration for Starz](../../simpleicons-6/S/Starz.Local.png) |




## Starz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Starz
include('simpleicons-6/S/Starz')

' renders the element
Starz('Starz', 'Starz', 'an optional tech label')
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

' loads the Item which embeds the element Starz
include('simpleicons-6/S/Starz')

' renders the element
Starz('Starz', 'Starz', 'an optional tech label')
@enduml
```

