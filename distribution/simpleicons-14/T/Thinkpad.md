# Thinkpad


```text
simpleicons-14/T/Thinkpad
```

```text
include('simpleicons-14/T/Thinkpad')
```



| Illustration | Thinkpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thinkpad.png) | ![illustration for Thinkpad](../../simpleicons-14/T/Thinkpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThinkpadXs>`
- `<$ThinkpadSm>`
- `<$ThinkpadMd>`
- `<$ThinkpadLg>`





## Thinkpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thinkpad
include('simpleicons-14/T/Thinkpad')

' renders the element
Thinkpad('Thinkpad', 'Thinkpad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thinkpad
include('simpleicons-14/T/Thinkpad')

' renders the element
Thinkpad('Thinkpad', 'Thinkpad', 'an optional tech label', 'an optional description')
@enduml
```

