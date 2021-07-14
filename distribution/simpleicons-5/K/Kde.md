# Kde


```text
simpleicons-5/K/Kde
```

```text
include('simpleicons-5/K/Kde')
```



| Illustration | Kde |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kde.png) | ![illustration for Kde](../../simpleicons-5/K/Kde.Local.png) |




## Kde

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kde
include('simpleicons-5/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label')
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

' loads the Item which embeds the element Kde
include('simpleicons-5/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label')
@enduml
```

