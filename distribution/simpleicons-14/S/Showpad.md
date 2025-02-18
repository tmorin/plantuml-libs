# Showpad


```text
simpleicons-14/S/Showpad
```

```text
include('simpleicons-14/S/Showpad')
```



| Illustration | Showpad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Showpad.png) | ![illustration for Showpad](../../simpleicons-14/S/Showpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShowpadXs>`
- `<$ShowpadSm>`
- `<$ShowpadMd>`
- `<$ShowpadLg>`





## Showpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Showpad
include('simpleicons-14/S/Showpad')

' renders the element
Showpad('Showpad', 'Showpad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Showpad
include('simpleicons-14/S/Showpad')

' renders the element
Showpad('Showpad', 'Showpad', 'an optional tech label', 'an optional description')
@enduml
```

