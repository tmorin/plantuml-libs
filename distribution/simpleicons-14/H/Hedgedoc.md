# Hedgedoc


```text
simpleicons-14/H/Hedgedoc
```

```text
include('simpleicons-14/H/Hedgedoc')
```



| Illustration | Hedgedoc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hedgedoc.png) | ![illustration for Hedgedoc](../../simpleicons-14/H/Hedgedoc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HedgedocXs>`
- `<$HedgedocSm>`
- `<$HedgedocMd>`
- `<$HedgedocLg>`





## Hedgedoc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hedgedoc
include('simpleicons-14/H/Hedgedoc')

' renders the element
Hedgedoc('Hedgedoc', 'Hedgedoc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hedgedoc
include('simpleicons-14/H/Hedgedoc')

' renders the element
Hedgedoc('Hedgedoc', 'Hedgedoc', 'an optional tech label', 'an optional description')
@enduml
```

