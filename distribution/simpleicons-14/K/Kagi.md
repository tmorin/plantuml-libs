# Kagi


```text
simpleicons-14/K/Kagi
```

```text
include('simpleicons-14/K/Kagi')
```



| Illustration | Kagi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kagi.png) | ![illustration for Kagi](../../simpleicons-14/K/Kagi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KagiXs>`
- `<$KagiSm>`
- `<$KagiMd>`
- `<$KagiLg>`





## Kagi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kagi
include('simpleicons-14/K/Kagi')

' renders the element
Kagi('Kagi', 'Kagi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kagi
include('simpleicons-14/K/Kagi')

' renders the element
Kagi('Kagi', 'Kagi', 'an optional tech label', 'an optional description')
@enduml
```

