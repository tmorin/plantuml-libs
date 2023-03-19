# Shadow


```text
simpleicons-8/S/Shadow
```

```text
include('simpleicons-8/S/Shadow')
```



| Illustration | Shadow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Shadow.png) | ![illustration for Shadow](../../simpleicons-8/S/Shadow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShadowXs>`
- `<$ShadowSm>`
- `<$ShadowMd>`
- `<$ShadowLg>`





## Shadow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Shadow
include('simpleicons-8/S/Shadow')

' renders the element
Shadow('Shadow', 'Shadow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shadow
include('simpleicons-8/S/Shadow')

' renders the element
Shadow('Shadow', 'Shadow', 'an optional tech label', 'an optional description')
@enduml
```

