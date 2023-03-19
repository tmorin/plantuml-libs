# Informatica


```text
simpleicons-8/I/Informatica
```

```text
include('simpleicons-8/I/Informatica')
```



| Illustration | Informatica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Informatica.png) | ![illustration for Informatica](../../simpleicons-8/I/Informatica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InformaticaXs>`
- `<$InformaticaSm>`
- `<$InformaticaMd>`
- `<$InformaticaLg>`





## Informatica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Informatica
include('simpleicons-8/I/Informatica')

' renders the element
Informatica('Informatica', 'Informatica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Informatica
include('simpleicons-8/I/Informatica')

' renders the element
Informatica('Informatica', 'Informatica', 'an optional tech label', 'an optional description')
@enduml
```

