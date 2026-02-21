# Hp


```text
simpleicons/H/Hp
```

```text
include('simpleicons/H/Hp')
```



| Illustration | Hp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hp.png) | ![illustration for Hp](../../simpleicons/H/Hp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HpXs>`
- `<$HpSm>`
- `<$HpMd>`
- `<$HpLg>`





## Hp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hp
include('simpleicons/H/Hp')

' renders the element
Hp('Hp', 'Hp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hp
include('simpleicons/H/Hp')

' renders the element
Hp('Hp', 'Hp', 'an optional tech label', 'an optional description')
@enduml
```

