# Wprocket


```text
simpleicons/W/Wprocket
```

```text
include('simpleicons/W/Wprocket')
```



| Illustration | Wprocket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wprocket.png) | ![illustration for Wprocket](../../simpleicons/W/Wprocket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WprocketXs>`
- `<$WprocketSm>`
- `<$WprocketMd>`
- `<$WprocketLg>`





## Wprocket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wprocket
include('simpleicons/W/Wprocket')

' renders the element
Wprocket('Wprocket', 'Wprocket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wprocket
include('simpleicons/W/Wprocket')

' renders the element
Wprocket('Wprocket', 'Wprocket', 'an optional tech label', 'an optional description')
@enduml
```

