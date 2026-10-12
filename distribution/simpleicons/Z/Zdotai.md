# Zdotai


```text
simpleicons/Z/Zdotai
```

```text
include('simpleicons/Z/Zdotai')
```



| Illustration | Zdotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zdotai.png) | ![illustration for Zdotai](../../simpleicons/Z/Zdotai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZdotaiXs>`
- `<$ZdotaiSm>`
- `<$ZdotaiMd>`
- `<$ZdotaiLg>`





## Zdotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zdotai
include('simpleicons/Z/Zdotai')

' renders the element
Zdotai('Zdotai', 'Zdotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zdotai
include('simpleicons/Z/Zdotai')

' renders the element
Zdotai('Zdotai', 'Zdotai', 'an optional tech label', 'an optional description')
@enduml
```

