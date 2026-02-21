# Adafruit


```text
simpleicons/A/Adafruit
```

```text
include('simpleicons/A/Adafruit')
```



| Illustration | Adafruit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Adafruit.png) | ![illustration for Adafruit](../../simpleicons/A/Adafruit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdafruitXs>`
- `<$AdafruitSm>`
- `<$AdafruitMd>`
- `<$AdafruitLg>`





## Adafruit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label', 'an optional description')
@enduml
```

