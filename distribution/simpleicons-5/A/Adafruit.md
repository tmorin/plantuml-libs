# Adafruit


```text
simpleicons-5/A/Adafruit
```

```text
include('simpleicons-5/A/Adafruit')
```



| Illustration | Adafruit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adafruit.png) | ![illustration for Adafruit](../../simpleicons-5/A/Adafruit.Local.png) |




## Adafruit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons-5/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label')
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

' loads the Item which embeds the element Adafruit
include('simpleicons-5/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label')
@enduml
```

