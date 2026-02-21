# Ens


```text
simpleicons-14/E/Ens
```

```text
include('simpleicons-14/E/Ens')
```



| Illustration | Ens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ens.png) | ![illustration for Ens](../../simpleicons-14/E/Ens.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnsXs>`
- `<$EnsSm>`
- `<$EnsMd>`
- `<$EnsLg>`





## Ens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ens
include('simpleicons-14/E/Ens')

' renders the element
Ens('Ens', 'Ens', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ens
include('simpleicons-14/E/Ens')

' renders the element
Ens('Ens', 'Ens', 'an optional tech label', 'an optional description')
@enduml
```

