# Tinkercad


```text
simpleicons-14/T/Tinkercad
```

```text
include('simpleicons-14/T/Tinkercad')
```



| Illustration | Tinkercad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tinkercad.png) | ![illustration for Tinkercad](../../simpleicons-14/T/Tinkercad.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TinkercadXs>`
- `<$TinkercadSm>`
- `<$TinkercadMd>`
- `<$TinkercadLg>`





## Tinkercad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tinkercad
include('simpleicons-14/T/Tinkercad')

' renders the element
Tinkercad('Tinkercad', 'Tinkercad', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tinkercad
include('simpleicons-14/T/Tinkercad')

' renders the element
Tinkercad('Tinkercad', 'Tinkercad', 'an optional tech label', 'an optional description')
@enduml
```

