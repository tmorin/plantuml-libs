# Wolfram


```text
simpleicons/W/Wolfram
```

```text
include('simpleicons/W/Wolfram')
```



| Illustration | Wolfram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wolfram.png) | ![illustration for Wolfram](../../simpleicons/W/Wolfram.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WolframXs>`
- `<$WolframSm>`
- `<$WolframMd>`
- `<$WolframLg>`





## Wolfram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wolfram
include('simpleicons/W/Wolfram')

' renders the element
Wolfram('Wolfram', 'Wolfram', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wolfram
include('simpleicons/W/Wolfram')

' renders the element
Wolfram('Wolfram', 'Wolfram', 'an optional tech label', 'an optional description')
@enduml
```

