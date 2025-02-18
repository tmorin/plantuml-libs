# Analogue


```text
simpleicons-14/A/Analogue
```

```text
include('simpleicons-14/A/Analogue')
```



| Illustration | Analogue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Analogue.png) | ![illustration for Analogue](../../simpleicons-14/A/Analogue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnalogueXs>`
- `<$AnalogueSm>`
- `<$AnalogueMd>`
- `<$AnalogueLg>`





## Analogue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Analogue
include('simpleicons-14/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Analogue
include('simpleicons-14/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label', 'an optional description')
@enduml
```

