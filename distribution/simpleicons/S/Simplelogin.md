# Simplelogin


```text
simpleicons/S/Simplelogin
```

```text
include('simpleicons/S/Simplelogin')
```



| Illustration | Simplelogin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Simplelogin.png) | ![illustration for Simplelogin](../../simpleicons/S/Simplelogin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimpleloginXs>`
- `<$SimpleloginSm>`
- `<$SimpleloginMd>`
- `<$SimpleloginLg>`





## Simplelogin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simplelogin
include('simpleicons/S/Simplelogin')

' renders the element
Simplelogin('Simplelogin', 'Simplelogin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simplelogin
include('simpleicons/S/Simplelogin')

' renders the element
Simplelogin('Simplelogin', 'Simplelogin', 'an optional tech label', 'an optional description')
@enduml
```

