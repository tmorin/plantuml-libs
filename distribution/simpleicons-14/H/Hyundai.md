# Hyundai


```text
simpleicons-14/H/Hyundai
```

```text
include('simpleicons-14/H/Hyundai')
```



| Illustration | Hyundai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hyundai.png) | ![illustration for Hyundai](../../simpleicons-14/H/Hyundai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyundaiXs>`
- `<$HyundaiSm>`
- `<$HyundaiMd>`
- `<$HyundaiLg>`





## Hyundai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hyundai
include('simpleicons-14/H/Hyundai')

' renders the element
Hyundai('Hyundai', 'Hyundai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hyundai
include('simpleicons-14/H/Hyundai')

' renders the element
Hyundai('Hyundai', 'Hyundai', 'an optional tech label', 'an optional description')
@enduml
```

