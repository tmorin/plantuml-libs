# Keycdn


```text
simpleicons-14/K/Keycdn
```

```text
include('simpleicons-14/K/Keycdn')
```



| Illustration | Keycdn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keycdn.png) | ![illustration for Keycdn](../../simpleicons-14/K/Keycdn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeycdnXs>`
- `<$KeycdnSm>`
- `<$KeycdnMd>`
- `<$KeycdnLg>`





## Keycdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keycdn
include('simpleicons-14/K/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keycdn
include('simpleicons-14/K/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label', 'an optional description')
@enduml
```

