# Espressif


```text
simpleicons-5/E/Espressif
```

```text
include('simpleicons-5/E/Espressif')
```



| Illustration | Espressif |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Espressif.png) | ![illustration for Espressif](../../simpleicons-5/E/Espressif.Local.png) |




## Espressif

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Espressif
include('simpleicons-5/E/Espressif')

' renders the element
Espressif('Espressif', 'Espressif', 'an optional tech label')
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

' loads the Item which embeds the element Espressif
include('simpleicons-5/E/Espressif')

' renders the element
Espressif('Espressif', 'Espressif', 'an optional tech label')
@enduml
```

