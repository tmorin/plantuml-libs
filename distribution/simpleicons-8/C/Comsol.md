# Comsol


```text
simpleicons-8/C/Comsol
```

```text
include('simpleicons-8/C/Comsol')
```



| Illustration | Comsol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Comsol.png) | ![illustration for Comsol](../../simpleicons-8/C/Comsol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComsolXs>`
- `<$ComsolSm>`
- `<$ComsolMd>`
- `<$ComsolLg>`





## Comsol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Comsol
include('simpleicons-8/C/Comsol')

' renders the element
Comsol('Comsol', 'Comsol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Comsol
include('simpleicons-8/C/Comsol')

' renders the element
Comsol('Comsol', 'Comsol', 'an optional tech label', 'an optional description')
@enduml
```

