# Peugeot


```text
simpleicons/P/Peugeot
```

```text
include('simpleicons/P/Peugeot')
```



| Illustration | Peugeot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Peugeot.png) | ![illustration for Peugeot](../../simpleicons/P/Peugeot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeugeotXs>`
- `<$PeugeotSm>`
- `<$PeugeotMd>`
- `<$PeugeotLg>`





## Peugeot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Peugeot
include('simpleicons/P/Peugeot')

' renders the element
Peugeot('Peugeot', 'Peugeot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Peugeot
include('simpleicons/P/Peugeot')

' renders the element
Peugeot('Peugeot', 'Peugeot', 'an optional tech label', 'an optional description')
@enduml
```

