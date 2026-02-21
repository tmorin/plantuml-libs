# Testin


```text
simpleicons/T/Testin
```

```text
include('simpleicons/T/Testin')
```



| Illustration | Testin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Testin.png) | ![illustration for Testin](../../simpleicons/T/Testin.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Testin
include('simpleicons/T/Testin')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Testin
include('simpleicons/T/Testin')

' renders the element
Testin('Testin', 'Testin', 'an optional tech label', 'an optional description')
@enduml
```

