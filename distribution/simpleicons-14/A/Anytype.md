# Anytype


```text
simpleicons-14/A/Anytype
```

```text
include('simpleicons-14/A/Anytype')
```



| Illustration | Anytype |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Anytype.png) | ![illustration for Anytype](../../simpleicons-14/A/Anytype.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnytypeXs>`
- `<$AnytypeSm>`
- `<$AnytypeMd>`
- `<$AnytypeLg>`





## Anytype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Anytype
include('simpleicons-14/A/Anytype')

' renders the element
Anytype('Anytype', 'Anytype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anytype
include('simpleicons-14/A/Anytype')

' renders the element
Anytype('Anytype', 'Anytype', 'an optional tech label', 'an optional description')
@enduml
```

