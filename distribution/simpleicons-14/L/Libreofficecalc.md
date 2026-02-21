# Libreofficecalc


```text
simpleicons-14/L/Libreofficecalc
```

```text
include('simpleicons-14/L/Libreofficecalc')
```



| Illustration | Libreofficecalc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Libreofficecalc.png) | ![illustration for Libreofficecalc](../../simpleicons-14/L/Libreofficecalc.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libreofficecalc
include('simpleicons-14/L/Libreofficecalc')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libreofficecalc
include('simpleicons-14/L/Libreofficecalc')

' renders the element
Libreofficecalc('Libreofficecalc', 'Libreofficecalc', 'an optional tech label', 'an optional description')
@enduml
```

