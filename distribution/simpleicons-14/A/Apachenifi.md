# Apachenifi


```text
simpleicons-14/A/Apachenifi
```

```text
include('simpleicons-14/A/Apachenifi')
```



| Illustration | Apachenifi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachenifi.png) | ![illustration for Apachenifi](../../simpleicons-14/A/Apachenifi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachenifiXs>`
- `<$ApachenifiSm>`
- `<$ApachenifiMd>`
- `<$ApachenifiLg>`





## Apachenifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachenifi
include('simpleicons-14/A/Apachenifi')

' renders the element
Apachenifi('Apachenifi', 'Apachenifi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachenifi
include('simpleicons-14/A/Apachenifi')

' renders the element
Apachenifi('Apachenifi', 'Apachenifi', 'an optional tech label', 'an optional description')
@enduml
```

