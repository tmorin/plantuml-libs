# Immer


```text
simpleicons-8/I/Immer
```

```text
include('simpleicons-8/I/Immer')
```



| Illustration | Immer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Immer.png) | ![illustration for Immer](../../simpleicons-8/I/Immer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImmerXs>`
- `<$ImmerSm>`
- `<$ImmerMd>`
- `<$ImmerLg>`





## Immer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Immer
include('simpleicons-8/I/Immer')

' renders the element
Immer('Immer', 'Immer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Immer
include('simpleicons-8/I/Immer')

' renders the element
Immer('Immer', 'Immer', 'an optional tech label', 'an optional description')
@enduml
```

