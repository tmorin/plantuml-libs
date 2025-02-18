# Pagseguro


```text
simpleicons-14/P/Pagseguro
```

```text
include('simpleicons-14/P/Pagseguro')
```



| Illustration | Pagseguro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pagseguro.png) | ![illustration for Pagseguro](../../simpleicons-14/P/Pagseguro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagseguroXs>`
- `<$PagseguroSm>`
- `<$PagseguroMd>`
- `<$PagseguroLg>`





## Pagseguro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pagseguro
include('simpleicons-14/P/Pagseguro')

' renders the element
Pagseguro('Pagseguro', 'Pagseguro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pagseguro
include('simpleicons-14/P/Pagseguro')

' renders the element
Pagseguro('Pagseguro', 'Pagseguro', 'an optional tech label', 'an optional description')
@enduml
```

