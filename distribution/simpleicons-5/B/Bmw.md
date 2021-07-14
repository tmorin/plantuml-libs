# Bmw


```text
simpleicons-5/B/Bmw
```

```text
include('simpleicons-5/B/Bmw')
```



| Illustration | Bmw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bmw.png) | ![illustration for Bmw](../../simpleicons-5/B/Bmw.Local.png) |




## Bmw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bmw
include('simpleicons-5/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label')
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

' loads the Item which embeds the element Bmw
include('simpleicons-5/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label')
@enduml
```

