# Honda


```text
simpleicons-8/H/Honda
```

```text
include('simpleicons-8/H/Honda')
```



| Illustration | Honda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Honda.png) | ![illustration for Honda](../../simpleicons-8/H/Honda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HondaXs>`
- `<$HondaSm>`
- `<$HondaMd>`
- `<$HondaLg>`





## Honda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Honda
include('simpleicons-8/H/Honda')

' renders the element
Honda('Honda', 'Honda', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Honda
include('simpleicons-8/H/Honda')

' renders the element
Honda('Honda', 'Honda', 'an optional tech label', 'an optional description')
@enduml
```

