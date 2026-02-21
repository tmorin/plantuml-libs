# Primeng


```text
simpleicons-14/P/Primeng
```

```text
include('simpleicons-14/P/Primeng')
```



| Illustration | Primeng |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Primeng.png) | ![illustration for Primeng](../../simpleicons-14/P/Primeng.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimengXs>`
- `<$PrimengSm>`
- `<$PrimengMd>`
- `<$PrimengLg>`





## Primeng

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Primeng
include('simpleicons-14/P/Primeng')

' renders the element
Primeng('Primeng', 'Primeng', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Primeng
include('simpleicons-14/P/Primeng')

' renders the element
Primeng('Primeng', 'Primeng', 'an optional tech label', 'an optional description')
@enduml
```

