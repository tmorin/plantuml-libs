# Porkbun


```text
simpleicons/P/Porkbun
```

```text
include('simpleicons/P/Porkbun')
```



| Illustration | Porkbun |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Porkbun.png) | ![illustration for Porkbun](../../simpleicons/P/Porkbun.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Porkbun
include('simpleicons/P/Porkbun')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Porkbun
include('simpleicons/P/Porkbun')

' renders the element
Porkbun('Porkbun', 'Porkbun', 'an optional tech label', 'an optional description')
@enduml
```

