# Arduino


```text
simpleicons-14/A/Arduino
```

```text
include('simpleicons-14/A/Arduino')
```



| Illustration | Arduino |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Arduino.png) | ![illustration for Arduino](../../simpleicons-14/A/Arduino.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArduinoXs>`
- `<$ArduinoSm>`
- `<$ArduinoMd>`
- `<$ArduinoLg>`





## Arduino

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arduino
include('simpleicons-14/A/Arduino')

' renders the element
Arduino('Arduino', 'Arduino', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arduino
include('simpleicons-14/A/Arduino')

' renders the element
Arduino('Arduino', 'Arduino', 'an optional tech label', 'an optional description')
@enduml
```

