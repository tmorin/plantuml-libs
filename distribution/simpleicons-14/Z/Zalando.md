# Zalando


```text
simpleicons-14/Z/Zalando
```

```text
include('simpleicons-14/Z/Zalando')
```



| Illustration | Zalando |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zalando.png) | ![illustration for Zalando](../../simpleicons-14/Z/Zalando.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZalandoXs>`
- `<$ZalandoSm>`
- `<$ZalandoMd>`
- `<$ZalandoLg>`





## Zalando

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zalando
include('simpleicons-14/Z/Zalando')

' renders the element
Zalando('Zalando', 'Zalando', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zalando
include('simpleicons-14/Z/Zalando')

' renders the element
Zalando('Zalando', 'Zalando', 'an optional tech label', 'an optional description')
@enduml
```

