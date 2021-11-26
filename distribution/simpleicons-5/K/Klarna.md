# Klarna


```text
simpleicons-5/K/Klarna
```

```text
include('simpleicons-5/K/Klarna')
```



| Illustration | Klarna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Klarna.png) | ![illustration for Klarna](../../simpleicons-5/K/Klarna.Local.png) |




## Klarna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Klarna
include('simpleicons-5/K/Klarna')

' renders the element
Klarna('Klarna', 'Klarna', 'an optional tech label')
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

' loads the Item which embeds the element Klarna
include('simpleicons-5/K/Klarna')

' renders the element
Klarna('Klarna', 'Klarna', 'an optional tech label')
@enduml
```

