# Gsk


```text
simpleicons-14/G/Gsk
```

```text
include('simpleicons-14/G/Gsk')
```



| Illustration | Gsk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gsk.png) | ![illustration for Gsk](../../simpleicons-14/G/Gsk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GskXs>`
- `<$GskSm>`
- `<$GskMd>`
- `<$GskLg>`





## Gsk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gsk
include('simpleicons-14/G/Gsk')

' renders the element
Gsk('Gsk', 'Gsk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gsk
include('simpleicons-14/G/Gsk')

' renders the element
Gsk('Gsk', 'Gsk', 'an optional tech label', 'an optional description')
@enduml
```

