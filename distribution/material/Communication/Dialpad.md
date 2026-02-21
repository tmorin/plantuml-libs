# Dialpad


```text
material/Communication/Dialpad
```

```text
include('material/Communication/Dialpad')
```



| Illustration | Dialpad |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Dialpad.png) | ![illustration for Dialpad](../../material/Communication/Dialpad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DialpadXs>`
- `<$DialpadSm>`
- `<$DialpadMd>`
- `<$DialpadLg>`





## Dialpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Dialpad
include('material/Communication/Dialpad')

' renders the element
Dialpad('Dialpad', 'Dialpad', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Dialpad
include('material/Communication/Dialpad')

' renders the element
Dialpad('Dialpad', 'Dialpad', 'an optional tech label', 'an optional description')
@enduml
```

