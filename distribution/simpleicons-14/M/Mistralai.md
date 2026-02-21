# Mistralai


```text
simpleicons-14/M/Mistralai
```

```text
include('simpleicons-14/M/Mistralai')
```



| Illustration | Mistralai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mistralai.png) | ![illustration for Mistralai](../../simpleicons-14/M/Mistralai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MistralaiXs>`
- `<$MistralaiSm>`
- `<$MistralaiMd>`
- `<$MistralaiLg>`





## Mistralai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mistralai
include('simpleicons-14/M/Mistralai')

' renders the element
Mistralai('Mistralai', 'Mistralai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mistralai
include('simpleicons-14/M/Mistralai')

' renders the element
Mistralai('Mistralai', 'Mistralai', 'an optional tech label', 'an optional description')
@enduml
```

