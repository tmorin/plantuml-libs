# Ravelry


```text
simpleicons/R/Ravelry
```

```text
include('simpleicons/R/Ravelry')
```



| Illustration | Ravelry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Ravelry.png) | ![illustration for Ravelry](../../simpleicons/R/Ravelry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RavelryXs>`
- `<$RavelrySm>`
- `<$RavelryMd>`
- `<$RavelryLg>`





## Ravelry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ravelry
include('simpleicons/R/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ravelry
include('simpleicons/R/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label', 'an optional description')
@enduml
```

