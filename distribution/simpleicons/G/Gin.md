# Gin


```text
simpleicons/G/Gin
```

```text
include('simpleicons/G/Gin')
```



| Illustration | Gin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gin.png) | ![illustration for Gin](../../simpleicons/G/Gin.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gin
include('simpleicons/G/Gin')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gin
include('simpleicons/G/Gin')

' renders the element
Gin('Gin', 'Gin', 'an optional tech label', 'an optional description')
@enduml
```

