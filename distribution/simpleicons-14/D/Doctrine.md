# Doctrine


```text
simpleicons-14/D/Doctrine
```

```text
include('simpleicons-14/D/Doctrine')
```



| Illustration | Doctrine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Doctrine.png) | ![illustration for Doctrine](../../simpleicons-14/D/Doctrine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoctrineXs>`
- `<$DoctrineSm>`
- `<$DoctrineMd>`
- `<$DoctrineLg>`





## Doctrine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Doctrine
include('simpleicons-14/D/Doctrine')

' renders the element
Doctrine('Doctrine', 'Doctrine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Doctrine
include('simpleicons-14/D/Doctrine')

' renders the element
Doctrine('Doctrine', 'Doctrine', 'an optional tech label', 'an optional description')
@enduml
```

