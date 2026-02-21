# Pdq


```text
simpleicons/P/Pdq
```

```text
include('simpleicons/P/Pdq')
```



| Illustration | Pdq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pdq.png) | ![illustration for Pdq](../../simpleicons/P/Pdq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PdqXs>`
- `<$PdqSm>`
- `<$PdqMd>`
- `<$PdqLg>`





## Pdq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pdq
include('simpleicons/P/Pdq')

' renders the element
Pdq('Pdq', 'Pdq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pdq
include('simpleicons/P/Pdq')

' renders the element
Pdq('Pdq', 'Pdq', 'an optional tech label', 'an optional description')
@enduml
```

