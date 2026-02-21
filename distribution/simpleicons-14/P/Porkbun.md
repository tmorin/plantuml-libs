# Porkbun


```text
simpleicons-14/P/Porkbun
```

```text
include('simpleicons-14/P/Porkbun')
```



| Illustration | Porkbun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Porkbun.png) | ![illustration for Porkbun](../../simpleicons-14/P/Porkbun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PorkbunXs>`
- `<$PorkbunSm>`
- `<$PorkbunMd>`
- `<$PorkbunLg>`





## Porkbun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Porkbun
include('simpleicons-14/P/Porkbun')

' renders the element
Porkbun('Porkbun', 'Porkbun', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Porkbun
include('simpleicons-14/P/Porkbun')

' renders the element
Porkbun('Porkbun', 'Porkbun', 'an optional tech label', 'an optional description')
@enduml
```

