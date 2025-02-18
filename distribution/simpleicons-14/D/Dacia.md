# Dacia


```text
simpleicons-14/D/Dacia
```

```text
include('simpleicons-14/D/Dacia')
```



| Illustration | Dacia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dacia.png) | ![illustration for Dacia](../../simpleicons-14/D/Dacia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DaciaXs>`
- `<$DaciaSm>`
- `<$DaciaMd>`
- `<$DaciaLg>`





## Dacia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dacia
include('simpleicons-14/D/Dacia')

' renders the element
Dacia('Dacia', 'Dacia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dacia
include('simpleicons-14/D/Dacia')

' renders the element
Dacia('Dacia', 'Dacia', 'an optional tech label', 'an optional description')
@enduml
```

