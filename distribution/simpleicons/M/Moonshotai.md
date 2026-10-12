# Moonshotai


```text
simpleicons/M/Moonshotai
```

```text
include('simpleicons/M/Moonshotai')
```



| Illustration | Moonshotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Moonshotai.png) | ![illustration for Moonshotai](../../simpleicons/M/Moonshotai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoonshotaiXs>`
- `<$MoonshotaiSm>`
- `<$MoonshotaiMd>`
- `<$MoonshotaiLg>`





## Moonshotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Moonshotai
include('simpleicons/M/Moonshotai')

' renders the element
Moonshotai('Moonshotai', 'Moonshotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moonshotai
include('simpleicons/M/Moonshotai')

' renders the element
Moonshotai('Moonshotai', 'Moonshotai', 'an optional tech label', 'an optional description')
@enduml
```

