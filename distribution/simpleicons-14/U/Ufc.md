# Ufc


```text
simpleicons-14/U/Ufc
```

```text
include('simpleicons-14/U/Ufc')
```



| Illustration | Ufc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ufc.png) | ![illustration for Ufc](../../simpleicons-14/U/Ufc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UfcXs>`
- `<$UfcSm>`
- `<$UfcMd>`
- `<$UfcLg>`





## Ufc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ufc
include('simpleicons-14/U/Ufc')

' renders the element
Ufc('Ufc', 'Ufc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ufc
include('simpleicons-14/U/Ufc')

' renders the element
Ufc('Ufc', 'Ufc', 'an optional tech label', 'an optional description')
@enduml
```

