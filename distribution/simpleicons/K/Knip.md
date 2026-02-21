# Knip


```text
simpleicons/K/Knip
```

```text
include('simpleicons/K/Knip')
```



| Illustration | Knip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Knip.png) | ![illustration for Knip](../../simpleicons/K/Knip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KnipXs>`
- `<$KnipSm>`
- `<$KnipMd>`
- `<$KnipLg>`





## Knip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Knip
include('simpleicons/K/Knip')

' renders the element
Knip('Knip', 'Knip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Knip
include('simpleicons/K/Knip')

' renders the element
Knip('Knip', 'Knip', 'an optional tech label', 'an optional description')
@enduml
```

