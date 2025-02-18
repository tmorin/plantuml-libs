# Aparat


```text
simpleicons-14/A/Aparat
```

```text
include('simpleicons-14/A/Aparat')
```



| Illustration | Aparat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aparat.png) | ![illustration for Aparat](../../simpleicons-14/A/Aparat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AparatXs>`
- `<$AparatSm>`
- `<$AparatMd>`
- `<$AparatLg>`





## Aparat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aparat
include('simpleicons-14/A/Aparat')

' renders the element
Aparat('Aparat', 'Aparat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aparat
include('simpleicons-14/A/Aparat')

' renders the element
Aparat('Aparat', 'Aparat', 'an optional tech label', 'an optional description')
@enduml
```

