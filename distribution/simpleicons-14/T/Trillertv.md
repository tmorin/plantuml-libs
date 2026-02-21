# Trillertv


```text
simpleicons-14/T/Trillertv
```

```text
include('simpleicons-14/T/Trillertv')
```



| Illustration | Trillertv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trillertv.png) | ![illustration for Trillertv](../../simpleicons-14/T/Trillertv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrillertvXs>`
- `<$TrillertvSm>`
- `<$TrillertvMd>`
- `<$TrillertvLg>`





## Trillertv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trillertv
include('simpleicons-14/T/Trillertv')

' renders the element
Trillertv('Trillertv', 'Trillertv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trillertv
include('simpleicons-14/T/Trillertv')

' renders the element
Trillertv('Trillertv', 'Trillertv', 'an optional tech label', 'an optional description')
@enduml
```

