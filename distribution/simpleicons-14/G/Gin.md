# Gin


```text
simpleicons-14/G/Gin
```

```text
include('simpleicons-14/G/Gin')
```



| Illustration | Gin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gin.png) | ![illustration for Gin](../../simpleicons-14/G/Gin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GinXs>`
- `<$GinSm>`
- `<$GinMd>`
- `<$GinLg>`





## Gin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gin
include('simpleicons-14/G/Gin')

' renders the element
Gin('Gin', 'Gin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gin
include('simpleicons-14/G/Gin')

' renders the element
Gin('Gin', 'Gin', 'an optional tech label', 'an optional description')
@enduml
```

