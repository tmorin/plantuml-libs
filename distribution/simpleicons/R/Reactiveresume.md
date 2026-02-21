# Reactiveresume


```text
simpleicons/R/Reactiveresume
```

```text
include('simpleicons/R/Reactiveresume')
```



| Illustration | Reactiveresume |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reactiveresume.png) | ![illustration for Reactiveresume](../../simpleicons/R/Reactiveresume.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReactiveresumeXs>`
- `<$ReactiveresumeSm>`
- `<$ReactiveresumeMd>`
- `<$ReactiveresumeLg>`





## Reactiveresume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reactiveresume
include('simpleicons/R/Reactiveresume')

' renders the element
Reactiveresume('Reactiveresume', 'Reactiveresume', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reactiveresume
include('simpleicons/R/Reactiveresume')

' renders the element
Reactiveresume('Reactiveresume', 'Reactiveresume', 'an optional tech label', 'an optional description')
@enduml
```

