# Kaios


```text
simpleicons-5/K/Kaios
```

```text
include('simpleicons-5/K/Kaios')
```



| Illustration | Kaios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kaios.png) | ![illustration for Kaios](../../simpleicons-5/K/Kaios.Local.png) |




## Kaios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kaios
include('simpleicons-5/K/Kaios')

' renders the element
Kaios('Kaios', 'Kaios', 'an optional tech label')
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

' loads the Item which embeds the element Kaios
include('simpleicons-5/K/Kaios')

' renders the element
Kaios('Kaios', 'Kaios', 'an optional tech label')
@enduml
```

