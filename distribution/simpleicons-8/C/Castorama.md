# Castorama


```text
simpleicons-8/C/Castorama
```

```text
include('simpleicons-8/C/Castorama')
```



| Illustration | Castorama |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Castorama.png) | ![illustration for Castorama](../../simpleicons-8/C/Castorama.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CastoramaXs>`
- `<$CastoramaSm>`
- `<$CastoramaMd>`
- `<$CastoramaLg>`





## Castorama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Castorama
include('simpleicons-8/C/Castorama')

' renders the element
Castorama('Castorama', 'Castorama', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Castorama
include('simpleicons-8/C/Castorama')

' renders the element
Castorama('Castorama', 'Castorama', 'an optional tech label', 'an optional description')
@enduml
```

