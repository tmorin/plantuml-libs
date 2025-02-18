# Exordo


```text
simpleicons-14/E/Exordo
```

```text
include('simpleicons-14/E/Exordo')
```



| Illustration | Exordo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Exordo.png) | ![illustration for Exordo](../../simpleicons-14/E/Exordo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExordoXs>`
- `<$ExordoSm>`
- `<$ExordoMd>`
- `<$ExordoLg>`





## Exordo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Exordo
include('simpleicons-14/E/Exordo')

' renders the element
Exordo('Exordo', 'Exordo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Exordo
include('simpleicons-14/E/Exordo')

' renders the element
Exordo('Exordo', 'Exordo', 'an optional tech label', 'an optional description')
@enduml
```

