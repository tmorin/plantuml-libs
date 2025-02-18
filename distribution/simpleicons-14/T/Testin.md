# Testin


```text
simpleicons-14/T/Testin
```

```text
include('simpleicons-14/T/Testin')
```



| Illustration | Testin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Testin.png) | ![illustration for Testin](../../simpleicons-14/T/Testin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TestinXs>`
- `<$TestinSm>`
- `<$TestinMd>`
- `<$TestinLg>`





## Testin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Testin
include('simpleicons-14/T/Testin')

' renders the element
Testin('Testin', 'Testin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Testin
include('simpleicons-14/T/Testin')

' renders the element
Testin('Testin', 'Testin', 'an optional tech label', 'an optional description')
@enduml
```

