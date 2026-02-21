# Electronfiddle


```text
simpleicons/E/Electronfiddle
```

```text
include('simpleicons/E/Electronfiddle')
```



| Illustration | Electronfiddle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Electronfiddle.png) | ![illustration for Electronfiddle](../../simpleicons/E/Electronfiddle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectronfiddleXs>`
- `<$ElectronfiddleSm>`
- `<$ElectronfiddleMd>`
- `<$ElectronfiddleLg>`





## Electronfiddle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Electronfiddle
include('simpleicons/E/Electronfiddle')

' renders the element
Electronfiddle('Electronfiddle', 'Electronfiddle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Electronfiddle
include('simpleicons/E/Electronfiddle')

' renders the element
Electronfiddle('Electronfiddle', 'Electronfiddle', 'an optional tech label', 'an optional description')
@enduml
```

