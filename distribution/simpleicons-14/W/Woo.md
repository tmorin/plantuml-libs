# Woo


```text
simpleicons-14/W/Woo
```

```text
include('simpleicons-14/W/Woo')
```



| Illustration | Woo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Woo.png) | ![illustration for Woo](../../simpleicons-14/W/Woo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WooXs>`
- `<$WooSm>`
- `<$WooMd>`
- `<$WooLg>`





## Woo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Woo
include('simpleicons-14/W/Woo')

' renders the element
Woo('Woo', 'Woo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Woo
include('simpleicons-14/W/Woo')

' renders the element
Woo('Woo', 'Woo', 'an optional tech label', 'an optional description')
@enduml
```

