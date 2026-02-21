# Libreofficecalc


```text
simpleicons/L/Libreofficecalc
```

```text
include('simpleicons/L/Libreofficecalc')
```



| Illustration | Libreofficecalc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Libreofficecalc.png) | ![illustration for Libreofficecalc](../../simpleicons/L/Libreofficecalc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibreofficecalcXs>`
- `<$LibreofficecalcSm>`
- `<$LibreofficecalcMd>`
- `<$LibreofficecalcLg>`





## Libreofficecalc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Libreofficecalc
include('simpleicons/L/Libreofficecalc')

' renders the element
Libreofficecalc('Libreofficecalc', 'Libreofficecalc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libreofficecalc
include('simpleicons/L/Libreofficecalc')

' renders the element
Libreofficecalc('Libreofficecalc', 'Libreofficecalc', 'an optional tech label', 'an optional description')
@enduml
```

