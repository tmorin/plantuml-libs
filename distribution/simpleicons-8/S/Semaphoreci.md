# Semaphoreci


```text
simpleicons-8/S/Semaphoreci
```

```text
include('simpleicons-8/S/Semaphoreci')
```



| Illustration | Semaphoreci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Semaphoreci.png) | ![illustration for Semaphoreci](../../simpleicons-8/S/Semaphoreci.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SemaphoreciXs>`
- `<$SemaphoreciSm>`
- `<$SemaphoreciMd>`
- `<$SemaphoreciLg>`





## Semaphoreci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Semaphoreci
include('simpleicons-8/S/Semaphoreci')

' renders the element
Semaphoreci('Semaphoreci', 'Semaphoreci', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Semaphoreci
include('simpleicons-8/S/Semaphoreci')

' renders the element
Semaphoreci('Semaphoreci', 'Semaphoreci', 'an optional tech label', 'an optional description')
@enduml
```

