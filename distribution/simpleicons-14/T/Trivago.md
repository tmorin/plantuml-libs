# Trivago


```text
simpleicons-14/T/Trivago
```

```text
include('simpleicons-14/T/Trivago')
```



| Illustration | Trivago |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Trivago.png) | ![illustration for Trivago](../../simpleicons-14/T/Trivago.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrivagoXs>`
- `<$TrivagoSm>`
- `<$TrivagoMd>`
- `<$TrivagoLg>`





## Trivago

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Trivago
include('simpleicons-14/T/Trivago')

' renders the element
Trivago('Trivago', 'Trivago', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trivago
include('simpleicons-14/T/Trivago')

' renders the element
Trivago('Trivago', 'Trivago', 'an optional tech label', 'an optional description')
@enduml
```

