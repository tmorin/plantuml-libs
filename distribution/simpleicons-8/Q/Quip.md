# Quip


```text
simpleicons-8/Q/Quip
```

```text
include('simpleicons-8/Q/Quip')
```



| Illustration | Quip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Quip.png) | ![illustration for Quip](../../simpleicons-8/Q/Quip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuipXs>`
- `<$QuipSm>`
- `<$QuipMd>`
- `<$QuipLg>`





## Quip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Quip
include('simpleicons-8/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quip
include('simpleicons-8/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label', 'an optional description')
@enduml
```

