# Tinygrad


```text
simpleicons-14/T/Tinygrad
```

```text
include('simpleicons-14/T/Tinygrad')
```



| Illustration | Tinygrad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tinygrad.png) | ![illustration for Tinygrad](../../simpleicons-14/T/Tinygrad.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tinygrad
include('simpleicons-14/T/Tinygrad')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tinygrad
include('simpleicons-14/T/Tinygrad')

' renders the element
Tinygrad('Tinygrad', 'Tinygrad', 'an optional tech label', 'an optional description')
@enduml
```

