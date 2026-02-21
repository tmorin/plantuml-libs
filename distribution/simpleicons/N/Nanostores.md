# Nanostores


```text
simpleicons/N/Nanostores
```

```text
include('simpleicons/N/Nanostores')
```



| Illustration | Nanostores |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nanostores.png) | ![illustration for Nanostores](../../simpleicons/N/Nanostores.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nanostores
include('simpleicons/N/Nanostores')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nanostores
include('simpleicons/N/Nanostores')

' renders the element
Nanostores('Nanostores', 'Nanostores', 'an optional tech label', 'an optional description')
@enduml
```

