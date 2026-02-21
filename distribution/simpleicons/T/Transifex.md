# Transifex


```text
simpleicons/T/Transifex
```

```text
include('simpleicons/T/Transifex')
```



| Illustration | Transifex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Transifex.png) | ![illustration for Transifex](../../simpleicons/T/Transifex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransifexXs>`
- `<$TransifexSm>`
- `<$TransifexMd>`
- `<$TransifexLg>`





## Transifex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Transifex
include('simpleicons/T/Transifex')

' renders the element
Transifex('Transifex', 'Transifex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transifex
include('simpleicons/T/Transifex')

' renders the element
Transifex('Transifex', 'Transifex', 'an optional tech label', 'an optional description')
@enduml
```

