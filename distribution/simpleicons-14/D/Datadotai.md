# Datadotai


```text
simpleicons-14/D/Datadotai
```

```text
include('simpleicons-14/D/Datadotai')
```



| Illustration | Datadotai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Datadotai.png) | ![illustration for Datadotai](../../simpleicons-14/D/Datadotai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatadotaiXs>`
- `<$DatadotaiSm>`
- `<$DatadotaiMd>`
- `<$DatadotaiLg>`





## Datadotai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Datadotai
include('simpleicons-14/D/Datadotai')

' renders the element
Datadotai('Datadotai', 'Datadotai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datadotai
include('simpleicons-14/D/Datadotai')

' renders the element
Datadotai('Datadotai', 'Datadotai', 'an optional tech label', 'an optional description')
@enduml
```

