# Litecoin


```text
simpleicons-14/L/Litecoin
```

```text
include('simpleicons-14/L/Litecoin')
```



| Illustration | Litecoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Litecoin.png) | ![illustration for Litecoin](../../simpleicons-14/L/Litecoin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LitecoinXs>`
- `<$LitecoinSm>`
- `<$LitecoinMd>`
- `<$LitecoinLg>`





## Litecoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Litecoin
include('simpleicons-14/L/Litecoin')

' renders the element
Litecoin('Litecoin', 'Litecoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Litecoin
include('simpleicons-14/L/Litecoin')

' renders the element
Litecoin('Litecoin', 'Litecoin', 'an optional tech label', 'an optional description')
@enduml
```

