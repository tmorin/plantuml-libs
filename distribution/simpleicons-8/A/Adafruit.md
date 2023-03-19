# Adafruit


```text
simpleicons-8/A/Adafruit
```

```text
include('simpleicons-8/A/Adafruit')
```



| Illustration | Adafruit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adafruit.png) | ![illustration for Adafruit](../../simpleicons-8/A/Adafruit.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons-8/A/Adafruit')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons-8/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label', 'an optional description')
@enduml
```

