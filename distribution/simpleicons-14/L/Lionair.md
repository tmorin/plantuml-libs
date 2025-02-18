# Lionair


```text
simpleicons-14/L/Lionair
```

```text
include('simpleicons-14/L/Lionair')
```



| Illustration | Lionair |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lionair.png) | ![illustration for Lionair](../../simpleicons-14/L/Lionair.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LionairXs>`
- `<$LionairSm>`
- `<$LionairMd>`
- `<$LionairLg>`





## Lionair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lionair
include('simpleicons-14/L/Lionair')

' renders the element
Lionair('Lionair', 'Lionair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lionair
include('simpleicons-14/L/Lionair')

' renders the element
Lionair('Lionair', 'Lionair', 'an optional tech label', 'an optional description')
@enduml
```

