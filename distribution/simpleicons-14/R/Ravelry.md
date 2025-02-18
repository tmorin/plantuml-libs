# Ravelry


```text
simpleicons-14/R/Ravelry
```

```text
include('simpleicons-14/R/Ravelry')
```



| Illustration | Ravelry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Ravelry.png) | ![illustration for Ravelry](../../simpleicons-14/R/Ravelry.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ravelry
include('simpleicons-14/R/Ravelry')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ravelry
include('simpleicons-14/R/Ravelry')

' renders the element
Ravelry('Ravelry', 'Ravelry', 'an optional tech label', 'an optional description')
@enduml
```

