# Hedgedoc


```text
simpleicons/H/Hedgedoc
```

```text
include('simpleicons/H/Hedgedoc')
```



| Illustration | Hedgedoc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hedgedoc.png) | ![illustration for Hedgedoc](../../simpleicons/H/Hedgedoc.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hedgedoc
include('simpleicons/H/Hedgedoc')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hedgedoc
include('simpleicons/H/Hedgedoc')

' renders the element
Hedgedoc('Hedgedoc', 'Hedgedoc', 'an optional tech label', 'an optional description')
@enduml
```

