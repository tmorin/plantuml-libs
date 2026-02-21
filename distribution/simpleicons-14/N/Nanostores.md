# Nanostores


```text
simpleicons-14/N/Nanostores
```

```text
include('simpleicons-14/N/Nanostores')
```



| Illustration | Nanostores |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nanostores.png) | ![illustration for Nanostores](../../simpleicons-14/N/Nanostores.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NanostoresXs>`
- `<$NanostoresSm>`
- `<$NanostoresMd>`
- `<$NanostoresLg>`





## Nanostores

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nanostores
include('simpleicons-14/N/Nanostores')

' renders the element
Nanostores('Nanostores', 'Nanostores', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nanostores
include('simpleicons-14/N/Nanostores')

' renders the element
Nanostores('Nanostores', 'Nanostores', 'an optional tech label', 'an optional description')
@enduml
```

