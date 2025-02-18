# Cardano


```text
simpleicons-14/C/Cardano
```

```text
include('simpleicons-14/C/Cardano')
```



| Illustration | Cardano |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cardano.png) | ![illustration for Cardano](../../simpleicons-14/C/Cardano.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CardanoXs>`
- `<$CardanoSm>`
- `<$CardanoMd>`
- `<$CardanoLg>`





## Cardano

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cardano
include('simpleicons-14/C/Cardano')

' renders the element
Cardano('Cardano', 'Cardano', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cardano
include('simpleicons-14/C/Cardano')

' renders the element
Cardano('Cardano', 'Cardano', 'an optional tech label', 'an optional description')
@enduml
```

