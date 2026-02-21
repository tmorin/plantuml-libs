# Tanstack


```text
simpleicons/T/Tanstack
```

```text
include('simpleicons/T/Tanstack')
```



| Illustration | Tanstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tanstack.png) | ![illustration for Tanstack](../../simpleicons/T/Tanstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TanstackXs>`
- `<$TanstackSm>`
- `<$TanstackMd>`
- `<$TanstackLg>`





## Tanstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tanstack
include('simpleicons/T/Tanstack')

' renders the element
Tanstack('Tanstack', 'Tanstack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tanstack
include('simpleicons/T/Tanstack')

' renders the element
Tanstack('Tanstack', 'Tanstack', 'an optional tech label', 'an optional description')
@enduml
```

