# Keyboard


```text
fontawesome/Solid/Keyboard
```

```text
include('fontawesome/Solid/Keyboard')
```



| Illustration | Keyboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Keyboard.png) | ![illustration for Keyboard](../../fontawesome/Solid/Keyboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardXs>`
- `<$KeyboardSm>`
- `<$KeyboardMd>`
- `<$KeyboardLg>`





## Keyboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Keyboard
include('fontawesome/Solid/Keyboard')

' renders the element
Keyboard('Keyboard', 'Keyboard', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Keyboard
include('fontawesome/Solid/Keyboard')

' renders the element
Keyboard('Keyboard', 'Keyboard', 'an optional tech label', 'an optional description')
@enduml
```

