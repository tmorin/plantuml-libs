# Kde


```text
simpleicons-7/K/Kde
```

```text
include('simpleicons-7/K/Kde')
```



| Illustration | Kde |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kde.png) | ![illustration for Kde](../../simpleicons-7/K/Kde.Local.png) |




## Kde

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kde
include('simpleicons-7/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kde
include('simpleicons-7/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label', 'an optional description')
@enduml
```

