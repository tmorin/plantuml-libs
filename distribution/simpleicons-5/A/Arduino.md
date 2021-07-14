# Arduino


```text
simpleicons-5/A/Arduino
```

```text
include('simpleicons-5/A/Arduino')
```



| Illustration | Arduino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Arduino.png) | ![illustration for Arduino](../../simpleicons-5/A/Arduino.Local.png) |




## Arduino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Arduino
include('simpleicons-5/A/Arduino')

' renders the element
Arduino('Arduino', 'Arduino', 'an optional tech label')
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

' loads the Item which embeds the element Arduino
include('simpleicons-5/A/Arduino')

' renders the element
Arduino('Arduino', 'Arduino', 'an optional tech label')
@enduml
```

