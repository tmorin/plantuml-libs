# Hyper


```text
simpleicons-8/H/Hyper
```

```text
include('simpleicons-8/H/Hyper')
```



| Illustration | Hyper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hyper.png) | ![illustration for Hyper](../../simpleicons-8/H/Hyper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyperXs>`
- `<$HyperSm>`
- `<$HyperMd>`
- `<$HyperLg>`





## Hyper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hyper
include('simpleicons-8/H/Hyper')

' renders the element
Hyper('Hyper', 'Hyper', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hyper
include('simpleicons-8/H/Hyper')

' renders the element
Hyper('Hyper', 'Hyper', 'an optional tech label', 'an optional description')
@enduml
```

