# Crehana


```text
simpleicons-14/C/Crehana
```

```text
include('simpleicons-14/C/Crehana')
```



| Illustration | Crehana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Crehana.png) | ![illustration for Crehana](../../simpleicons-14/C/Crehana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrehanaXs>`
- `<$CrehanaSm>`
- `<$CrehanaMd>`
- `<$CrehanaLg>`





## Crehana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Crehana
include('simpleicons-14/C/Crehana')

' renders the element
Crehana('Crehana', 'Crehana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crehana
include('simpleicons-14/C/Crehana')

' renders the element
Crehana('Crehana', 'Crehana', 'an optional tech label', 'an optional description')
@enduml
```

