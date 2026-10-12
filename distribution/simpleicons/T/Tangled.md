# Tangled


```text
simpleicons/T/Tangled
```

```text
include('simpleicons/T/Tangled')
```



| Illustration | Tangled |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tangled.png) | ![illustration for Tangled](../../simpleicons/T/Tangled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TangledXs>`
- `<$TangledSm>`
- `<$TangledMd>`
- `<$TangledLg>`





## Tangled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tangled
include('simpleicons/T/Tangled')

' renders the element
Tangled('Tangled', 'Tangled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tangled
include('simpleicons/T/Tangled')

' renders the element
Tangled('Tangled', 'Tangled', 'an optional tech label', 'an optional description')
@enduml
```

