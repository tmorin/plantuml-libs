# Scratch


```text
simpleicons-8/S/Scratch
```

```text
include('simpleicons-8/S/Scratch')
```



| Illustration | Scratch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Scratch.png) | ![illustration for Scratch](../../simpleicons-8/S/Scratch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScratchXs>`
- `<$ScratchSm>`
- `<$ScratchMd>`
- `<$ScratchLg>`





## Scratch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Scratch
include('simpleicons-8/S/Scratch')

' renders the element
Scratch('Scratch', 'Scratch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scratch
include('simpleicons-8/S/Scratch')

' renders the element
Scratch('Scratch', 'Scratch', 'an optional tech label', 'an optional description')
@enduml
```

