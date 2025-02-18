# Vala


```text
simpleicons-14/V/Vala
```

```text
include('simpleicons-14/V/Vala')
```



| Illustration | Vala |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vala.png) | ![illustration for Vala](../../simpleicons-14/V/Vala.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ValaXs>`
- `<$ValaSm>`
- `<$ValaMd>`
- `<$ValaLg>`





## Vala

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vala
include('simpleicons-14/V/Vala')

' renders the element
Vala('Vala', 'Vala', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vala
include('simpleicons-14/V/Vala')

' renders the element
Vala('Vala', 'Vala', 'an optional tech label', 'an optional description')
@enduml
```

