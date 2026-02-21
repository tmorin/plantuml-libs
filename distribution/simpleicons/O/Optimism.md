# Optimism


```text
simpleicons/O/Optimism
```

```text
include('simpleicons/O/Optimism')
```



| Illustration | Optimism |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Optimism.png) | ![illustration for Optimism](../../simpleicons/O/Optimism.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OptimismXs>`
- `<$OptimismSm>`
- `<$OptimismMd>`
- `<$OptimismLg>`





## Optimism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Optimism
include('simpleicons/O/Optimism')

' renders the element
Optimism('Optimism', 'Optimism', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Optimism
include('simpleicons/O/Optimism')

' renders the element
Optimism('Optimism', 'Optimism', 'an optional tech label', 'an optional description')
@enduml
```

