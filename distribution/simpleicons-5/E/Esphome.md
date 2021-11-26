# Esphome


```text
simpleicons-5/E/Esphome
```

```text
include('simpleicons-5/E/Esphome')
```



| Illustration | Esphome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Esphome.png) | ![illustration for Esphome](../../simpleicons-5/E/Esphome.Local.png) |




## Esphome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Esphome
include('simpleicons-5/E/Esphome')

' renders the element
Esphome('Esphome', 'Esphome', 'an optional tech label')
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

' loads the Item which embeds the element Esphome
include('simpleicons-5/E/Esphome')

' renders the element
Esphome('Esphome', 'Esphome', 'an optional tech label')
@enduml
```

