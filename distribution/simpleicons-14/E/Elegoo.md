# Elegoo


```text
simpleicons-14/E/Elegoo
```

```text
include('simpleicons-14/E/Elegoo')
```



| Illustration | Elegoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Elegoo.png) | ![illustration for Elegoo](../../simpleicons-14/E/Elegoo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElegooXs>`
- `<$ElegooSm>`
- `<$ElegooMd>`
- `<$ElegooLg>`





## Elegoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Elegoo
include('simpleicons-14/E/Elegoo')

' renders the element
Elegoo('Elegoo', 'Elegoo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elegoo
include('simpleicons-14/E/Elegoo')

' renders the element
Elegoo('Elegoo', 'Elegoo', 'an optional tech label', 'an optional description')
@enduml
```

