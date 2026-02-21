# Tinygrad


```text
simpleicons/T/Tinygrad
```

```text
include('simpleicons/T/Tinygrad')
```



| Illustration | Tinygrad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tinygrad.png) | ![illustration for Tinygrad](../../simpleicons/T/Tinygrad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TinygradXs>`
- `<$TinygradSm>`
- `<$TinygradMd>`
- `<$TinygradLg>`





## Tinygrad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tinygrad
include('simpleicons/T/Tinygrad')

' renders the element
Tinygrad('Tinygrad', 'Tinygrad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tinygrad
include('simpleicons/T/Tinygrad')

' renders the element
Tinygrad('Tinygrad', 'Tinygrad', 'an optional tech label', 'an optional description')
@enduml
```

