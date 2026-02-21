# Griddotai


```text
simpleicons/G/Griddotai
```

```text
include('simpleicons/G/Griddotai')
```



| Illustration | Griddotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Griddotai.png) | ![illustration for Griddotai](../../simpleicons/G/Griddotai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GriddotaiXs>`
- `<$GriddotaiSm>`
- `<$GriddotaiMd>`
- `<$GriddotaiLg>`





## Griddotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Griddotai
include('simpleicons/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Griddotai
include('simpleicons/G/Griddotai')

' renders the element
Griddotai('Griddotai', 'Griddotai', 'an optional tech label', 'an optional description')
@enduml
```

