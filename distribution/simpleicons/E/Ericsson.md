# Ericsson


```text
simpleicons/E/Ericsson
```

```text
include('simpleicons/E/Ericsson')
```



| Illustration | Ericsson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Ericsson.png) | ![illustration for Ericsson](../../simpleicons/E/Ericsson.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EricssonXs>`
- `<$EricssonSm>`
- `<$EricssonMd>`
- `<$EricssonLg>`





## Ericsson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ericsson
include('simpleicons/E/Ericsson')

' renders the element
Ericsson('Ericsson', 'Ericsson', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ericsson
include('simpleicons/E/Ericsson')

' renders the element
Ericsson('Ericsson', 'Ericsson', 'an optional tech label', 'an optional description')
@enduml
```

