# Iberia


```text
simpleicons-14/I/Iberia
```

```text
include('simpleicons-14/I/Iberia')
```



| Illustration | Iberia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iberia.png) | ![illustration for Iberia](../../simpleicons-14/I/Iberia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IberiaXs>`
- `<$IberiaSm>`
- `<$IberiaMd>`
- `<$IberiaLg>`





## Iberia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iberia
include('simpleicons-14/I/Iberia')

' renders the element
Iberia('Iberia', 'Iberia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iberia
include('simpleicons-14/I/Iberia')

' renders the element
Iberia('Iberia', 'Iberia', 'an optional tech label', 'an optional description')
@enduml
```

